var React = require('react');
var owmApiKey = require('../owmApiKey');
console.log(owmApiKey);
var CityDataContainer = require('./CityDataContainer.jsx');
var NavBar = require('./NavBar.jsx');
var CurrentWeather = require('./CurrentWeather.jsx');
var FutureWeather = require('./FutureWeather.jsx');
var countries = require('country-data').countries;
var classNames = require('classnames');
var HTTP = require('../services/httpservice');

// Please visit http://openweathermap.org/api and sign up for an API KEY
// Place your API key in ownApiKey.js

var YOUR_OWM_API_KEY = owmApiKey;

var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      cityData: [],
      metric: false
    };
  },
  handleClick: function() {
    this.setState({metric: !this.state.metric});
  },
  imperialClick: function() {
    this.setState({metric: false});
  },
  metricClick: function() {
    this.setState({metric: true});
  },
  formattedDate: function(timestamp){
    var pubDate = new Date();
    pubDate.setTime(timestamp * 1000);
    pubDate = pubDate.toUTCString();
    pubDate+=pubDate;
    pubDate=pubDate.split(' ').slice(0, 4).join(' ');
    return(pubDate);
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
  toCelsius: function(tempF) {
    return(Math.round((tempF - 32) * (5/9)));
  },
  cityScrape: function(search) {
    if(!search){search='berlin';}
    HTTP.get('/data/2.5/weather?q='+ search + '&units=imperial&appid=' + YOUR_OWM_API_KEY)
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
          tempC: this.toCelsius(main.temp),
          min: Math.round(main.temp_min),
          minC: this.toCelsius(main.temp_min),
          max: Math.round(main.temp_max),
          maxC: this.toCelsius(main.temp_max),
          name: data.name,
          icon: this.evalIcon(data.weather[0].icon),
          description: this.toTitleCase(data.weather[0].description),
          country: countryName,
          dt: Date(data.dt)
        }
      );
      HTTP.get('/data/2.5/forecast?lat='+coord.lat+'&lon='+coord.lon+'&units=imperial&appid=' + YOUR_OWM_API_KEY)
      .then(function(data){
        console.log(coord.lat);console.log(coord.lon);console.log(data);
        this.setState(
          {
            day1: this.formattedDate(data.list[7].dt),
            day1Temp: Math.round(data.list[7].main.temp),
            day1TempC: this.toCelsius(data.list[7].main.temp),
            day1TempMax: data.list[7].main.temp_max,
            day1TempMin: data.list[7].main.temp_min,
            day1Description: this.toTitleCase(data.list[7].weather[0].description),
            day1Icon: this.evalIcon(data.list[7].weather[0].icon),
            day2: this.formattedDate(data.list[15].dt),
            day2Temp: Math.round(data.list[15].main.temp),
            day2TempC: this.toCelsius(data.list[15].main.temp),
            day2TempMax: data.list[15].main.temp_max,
            day2TempMin: data.list[15].main.temp_min,
            day2Description: this.toTitleCase(data.list[15].weather[0].description),
            day2Icon: this.evalIcon(data.list[15].weather[0].icon),
            day3: this.formattedDate(data.list[23].dt),
            day3Temp: Math.round(data.list[23].main.temp),
            day3TempC: this.toCelsius(data.list[23].main.temp),
            day3TempMax: data.list[23].main.temp_max,
            day3TempMin: data.list[23].main.temp_min,
            day3Description: this.toTitleCase(data.list[23].weather[0].description),
            day3Icon: this.evalIcon(data.list[23].weather[0].icon),
            day4: this.formattedDate(data.list[31].dt),
            day4Temp: Math.round(data.list[31].main.temp),
            day4TempC: this.toCelsius(data.list[31].main.temp),
            day4TempMax: data.list[31].main.temp_max,
            day4TempMin: data.list[31].main.temp_min,
            day4Description: this.toTitleCase(data.list[31].weather[0].description),
            day4Icon: this.evalIcon(data.list[31].weather[0].icon),
            day5: this.formattedDate(data.list[39].dt),
            day5Temp: Math.round(data.list[39].main.temp),
            day5TempC: this.toCelsius(data.list[39].main.temp),
            day5TempMax: data.list[39].main.temp_max,
            day5TempMin: data.list[39].main.temp_min,
            day5Description: this.toTitleCase(data.list[39].weather[0].description),
            day5Icon: this.evalIcon(data.list[39].weather[0].icon)
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
    var tempUnit = (s.metric ? 'Switch to Fahrenheit' : 'Switch to Celsius');
    var currentTemp = (s.metric ? s.tempC : s.temp);
    var currentMin = (s.metric ? s.minC : s.min);
    var currentMax = (s.metric ? s.maxC : s.max);
    var currentTempUnit = (s.metric ? '°C' : '°F');
    var day1Temp = (s.metric ? s.day1TempC : s.day1Temp);
    var day2Temp = (s.metric ? s.day2TempC : s.day2Temp);
    var day3Temp = (s.metric ? s.day3TempC : s.day3Temp);
    var day4Temp = (s.metric ? s.day4TempC : s.day4Temp);
    var day5Temp = (s.metric ? s.day5TempC : s.day5Temp);
    var imperialClass = classNames('btn btn-xs btn-info-outline', this.state.metric ? '' : 'active');
    var metricClass = classNames('btn btn-xs btn-info-outline', this.state.metric ? 'active' : '');

    return (
      <div>
        <NavBar onNewSearch={this.handleSearch} />
        <div className="row text-center">
          <div className="col-xs-12">
            <CurrentWeather
              currentTemp={currentTemp}
              currentTempUnit={currentTempUnit}
              currentMin={currentMin}
              currentMax={currentMax}
              name={s.name}
              country={s.country}
              icon={s.icon}
              description={s.description}
              dt={s.dt}
              tempClick={this.handleClick}
              imperialClick={this.imperialClick}
              metricClick={this.metricClick}
              imperialClass={imperialClass}
              metricClass={metricClass}
            />
          </div>
        </div>
        <FutureWeather
          day1={s.day1}
          day1Temp={day1Temp}
          day1Min={s.day1TempMin}
          day1Max={s.day1TempMax}
          day1Description={s.day1Description}
          day1Icon={s.day1Icon}
          day2={s.day2}
          day2Temp={day2Temp}
          day2Min={s.day2TempMin}
          day2Max={s.day2TempMax}
          day2Description={s.day2Description}
          day2Icon={s.day2Icon}
          day3={s.day3}
          day3Temp={day3Temp}
          day3Min={s.day3TempMin}
          day3Max={s.day3TempMax}
          day3Description={s.day3Description}
          day3Icon={s.day3Icon}
          day4={s.day4}
          day4Temp={day4Temp}
          day4Min={s.day4TempMin}
          day4Max={s.day4TempMax}
          day4Description={s.day4Description}
          day4Icon={s.day4Icon}
          day5={s.day5}
          day5Temp={day5Temp}
          day5Min={s.day5TempMin}
          day5Max={s.day5TempMax}
          day5Description={s.day5Description}
          day5Icon={s.day5Icon}
        />

      </div>
        );
  }
});


module.exports = Dashboard;
