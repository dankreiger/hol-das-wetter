var React = require('react');
var owmApiKey = require('../owmApiKey');
var helperFunctions = require('../helperFunctions');
var hf = new helperFunctions();
var CityDataContainer = require('./CityDataContainer.jsx');
var NavBar = require('./NavBar.jsx');
var Map = require('./Map.jsx');
var CurrentWeather = require('./CurrentWeather.jsx');
var FutureWeather = require('./FutureWeather.jsx');
var countries = require('country-data').countries;
var classNames = require('classnames');
var HTTP = require('../services/httpservice');

// Please visit http://openweathermap.org/api and sign up for an API KEY
// Place your API key in ownApiKey.js
var OWM_API_KEY = owmApiKey;

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
  cityScrape: function(search) {
    if(!search){search='berlin';}
    HTTP.get('/data/2.5/weather?q='+ search + '&units=imperial&appid=' + OWM_API_KEY)
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
          minLat: coord.lat - 0.12,
          minLon: coord.lon - 0.12,
          maxLat: coord.lat + 0.12,
          maxLon: coord.lon + 0.12,
          temp: Math.round(main.temp),
          tempC: hf.toCelsius(main.temp),
          min: Math.round(main.temp_min),
          minC: hf.toCelsius(main.temp_min),
          max: Math.round(main.temp_max),
          maxC: hf.toCelsius(main.temp_max),
          name: data.name,
          icon: hf.evalIcon(data.weather[0].icon),
          description: hf.toTitleCase(data.weather[0].description),
          country: countryName,
          dt: hf.formattedDate(data.dt)
        }
      );
      HTTP.get('/data/2.5/forecast?lat='+coord.lat+'&lon='+coord.lon+'&units=imperial&appid=' + OWM_API_KEY)
      .then(function(data){
        this.setState(
          {
            day1: hf.formattedDate(data.list[7].dt),
            day1Temp: Math.round(data.list[7].main.temp),
            day1TempC: hf.toCelsius(data.list[7].main.temp),
            day1TempMax: data.list[7].main.temp_max,
            day1TempMin: data.list[7].main.temp_min,
            day1Description: hf.toTitleCase(data.list[7].weather[0].description),
            day1Icon: hf.evalIcon(data.list[7].weather[0].icon),
            day2: hf.formattedDate(data.list[15].dt),
            day2Temp: Math.round(data.list[15].main.temp),
            day2TempC: hf.toCelsius(data.list[15].main.temp),
            day2TempMax: data.list[15].main.temp_max,
            day2TempMin: data.list[15].main.temp_min,
            day2Description: hf.toTitleCase(data.list[15].weather[0].description),
            day2Icon: hf.evalIcon(data.list[15].weather[0].icon),
            day3: hf.formattedDate(data.list[23].dt),
            day3Temp: Math.round(data.list[23].main.temp),
            day3TempC: hf.toCelsius(data.list[23].main.temp),
            day3TempMax: data.list[23].main.temp_max,
            day3TempMin: data.list[23].main.temp_min,
            day3Description: hf.toTitleCase(data.list[23].weather[0].description),
            day3Icon: hf.evalIcon(data.list[23].weather[0].icon),
            day4: hf.formattedDate(data.list[31].dt),
            day4Temp: Math.round(data.list[31].main.temp),
            day4TempC: hf.toCelsius(data.list[31].main.temp),
            day4TempMax: data.list[31].main.temp_max,
            day4TempMin: data.list[31].main.temp_min,
            day4Description: hf.toTitleCase(data.list[31].weather[0].description),
            day4Icon: hf.evalIcon(data.list[31].weather[0].icon)
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
    var mapUrl = "//www.openstreetmap.org/export/embed.html?bbox="+s.minLon+"%2C"+s.minLat+"%2C"+s.maxLon+"%2C"+s.maxLat+"&amp;layer=mapnik"
    return (
      <div>

        <NavBar onNewSearch={this.handleSearch} />
        <div className="row text-center">
          <div className="col-xs-6">
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
          <div className="col-xs-6">
            <Map mapUrl={mapUrl} />
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
        />
      </div>
        );
  }
});


module.exports = Dashboard;
