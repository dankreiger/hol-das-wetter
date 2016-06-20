var React = require('react');
var CityDataContainer = require('./CityDataContainer.jsx');
var NavBar = require('./NavBar.jsx');
var SearchBox = require('./SearchBox.jsx');
var CurrentWeather = require('./CurrentWeather.jsx');
var FutureWeather = require('./FutureWeather.jsx');
var countries = require('country-data').countries;
var HTTP = require('../services/httpservice');

var Dashboard = React.createClass({
  getInitialState: function() {
    return { cityData: [] };
  },
  evalIcon: function(iconText){
    var icon = "wi ";
    if(iconText == "01d"){
      icon += "wi-day-sunny";
    } else if(iconText == "02d"){
      icon += "wi-day-cloudy";
    } else if(iconText == "03d"){
      icon += "wi-cloud";
    } else if(iconText == "04d"){
      icon += "wi-cloudy";
    } else if(iconText == "09d"){
      icon += "wi-rain";
    } else if(iconText == "10d"){
      icon += "wi-day-rain";
    } else if(iconText == "11d"){
      icon += "wi-thunderstorm";
    } else if(iconText == "13d"){
      icon += "wi-snow";
    } else if(iconText == "50d"){
      icon += "wi-windy";
    } else if(iconText == "01n"){
      icon += "wi-night-clear";
    } else if(iconText == "02n"){
      icon += "wi-night-alt-cloudy";
    } else if(iconText == "03n"){
      icon += "wi-cloud";
    } else if(iconText == "04n"){
      icon += "wi-cloudy";
    } else if(iconText == "09n"){
      icon += "wi-rain";
    } else if(iconText == "10n"){
      icon += "wi-night-alt-rain";
    } else if(iconText == "11n"){
      icon += "wi-thunderstorm";
    } else if(iconText == "13n"){
      icon += "wi-snow";
    } else if(iconText == "50n"){
      icon += "wi-windy";
    }
    return (icon);
  },
  toTitleCase: function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },
  cityScrape: function(search) {
    if(!search){search='berlin';}
    HTTP.get('/data/2.5/weather?q='+ search + '&units=imperial&appid=YOUR_API_KEY')
    .then(function(data){
      var main = data.main;
      var coord = data.coord;
      var countryName;
      console.log(data);
      countries.all.map(function(country){
        if(country.alpha2==data.sys.country){
          countryName = country.name;
        };
      });
      this.setState(
        {
          lat: coord.lat,
          lon: coord.lon,
          temp: Math.round(main.temp),
          tempC: Math.round((main.temp - 32) * (5/9)),
          min: main.temp_min,
          max: main.temp_max,
          name: data.name,
          icon: this.evalIcon(data.weather[0].icon),
          description: this.toTitleCase(data.weather[0].description),
          country: countryName,
        }
      );
      HTTP.get('/data/2.5/forecast?lat='+coord.lat+'&lon='+coord.lon+'&units=imperial&appid=YOUR_API_KEY')
      .then(function(data){
        console.log(coord.lat);console.log(coord.lon);
        console.log(data.list[6]);
        this.setState(
          {
            day1: data.list[5].dt_txt,
            day1Temp: data.list[5].main.temp,
            day1TempMax: data.list[5].main.temp_max,
            day1TempMin: data.list[5].main.temp_min,
            day2: data.list[13].dt_txt,
            day2Temp: data.list[13].main.temp,
            day2TempMax: data.list[13].main.temp_max,
            day2TempMin: data.list[13].main.temp_min,
            day3: data.list[21].dt_txt,
            day3Temp: data.list[21].main.temp,
            day3TempMax: data.list[21].main.temp_max,
            day3TempMin: data.list[21].main.temp_min,
            day4: data.list[29].dt_txt,
            day4Temp: data.list[29].main.temp,
            day4TempMax: data.list[29].main.temp_max,
            day4TempMin: data.list[29].main.temp_min,
            day5: data.list[37].dt_txt,
            day5Temp: data.list[37].main.temp,
            day5TempMax: data.list[37].main.temp_max,
            day5TempMin: data.list[37].main.temp_min,
          }
        );
      }.bind(this));
    }.bind(this));

  },

  componentWillMount: function () {
    this.cityScrape();
  },
  handleSearch: function(search){
    this.cityScrape(search);
  },
  render: function() {
    var s = this.state;
    return (
      <div>
        <NavBar />
        <CurrentWeather temp={s.temp} tempC={s.tempC} min={s.min} max={s.max} name={s.name} country={s.country} icon={s.icon} description={s.description}/>
        {
          <FutureWeather
            day1={s.day1}
            day1Temp={s.day1Temp}
            day1Min={s.day1TempMin}
            day1Max={s.day1TempMax}
            day2={s.day2}
            day2Temp={s.day2Temp}
            day2Min={s.day2TempMin}
            day2Max={s.day2TempMax}
            day3={s.day3}
            day3Temp={s.day3Temp}
            day3Min={s.day3TempMin}
            day3Max={s.day3TempMax}
            day4={s.day4}
            day4Temp={s.day4Temp}
            day4Min={s.day4TempMin}
            day4Max={s.day4TempMax}
            day5={s.day5}
            day5Temp={s.day5Temp}
            day5Min={s.day5TempMin}
            day5Max={s.day5TempMax}
            name={s.name}
            country={s.country}
            icon={s.icon}
            description={s.description}/>
        }
        <SearchBox onNewSearch={this.handleSearch} />
      </div>
        );
  }
});


module.exports = Dashboard;
