function helperFunctions() {

  this.formattedDate = function(timestamp) {
    var pubDate = new Date();
    pubDate.setTime(timestamp * 1000);
    pubDate = pubDate.toUTCString();
    pubDate+=pubDate;
    pubDate=pubDate.split(' ').slice(0, 4).join(' ');
    return(pubDate);
  }

  this.evalIcon = function(iconText) {
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
  }

  this.toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  this.toCelsius = function(tempF) {
    return(Math.round((tempF - 32) * (5/9)));
  }

}


module.exports = helperFunctions;
