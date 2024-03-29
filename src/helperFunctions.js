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
    var icon = "wi ", backgroundPhoto = "";
    if(iconText == "01d"){icon += "wi-day-sunny";backgroundPhoto += "images/sunny.jpg";}
    else if(iconText == "02d"){icon += "wi-day-cloudy";backgroundPhoto += "images/fewClouds.jpg";}
    else if(iconText == "03d"){icon += "wi-cloud";backgroundPhoto += "images/scatteredClouds.jpg";}
    else if(iconText == "04d"){icon += "wi-cloudy";backgroundPhoto += "images/brokenClouds.jpg";}
    else if(iconText == "09d"){icon += "wi-rain";backgroundPhoto += "images/lightRain.jpg"}
    else if(iconText == "10d"){icon += "wi-day-rain";backgroundPhoto += "images/rain.jpg"}
    else if(iconText == "11d"){icon += "wi-thunderstorm";backgroundPhoto += "images/thunderstorm.jpg"}
    else if(iconText == "13d"){icon += "wi-snow";backgroundPhoto += "images/snow.jpg"}
    else if(iconText == "50d"){icon += "wi-windy";backgroundPhoto += "images/windy.jpg"}
    else if(iconText == "01n"){icon += "wi-night-clear";backgroundPhoto += "images/clearNight.jpg"}
    else if(iconText == "02n"){icon += "wi-night-alt-cloudy";backgroundPhoto += "images/fewCloudsNight.jpg"}
    else if(iconText == "03n"){icon += "wi-cloud";backgroundPhoto += "images/scatteredCloudsNight.jpg"}
    else if(iconText == "04n"){icon += "wi-cloudy";backgroundPhoto += "images/brokenCloudsNight.jpg"}
    else if(iconText == "09n"){icon += "wi-rain";backgroundPhoto += "images/rain.jpg"}
    else if(iconText == "10n"){icon += "wi-night-alt-rain";backgroundPhoto += "images/clouds.jpg"}
    else if(iconText == "11n"){icon += "wi-thunderstorm";backgroundPhoto += "images/thunderstorm.jpg"}
    else if(iconText == "13n"){icon += "wi-snow";backgroundPhoto += "images/snow.jpg"}
    else if(iconText == "50n"){icon += "wi-windy";backgroundPhoto += "images/clouds.jpg"}
    return (pup ={icon: icon, backgroundPhoto: backgroundPhoto});
  }

  this.toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  this.toFahrenheit = function(tempC) {
    return(Math.round((tempC * (9/5)) + 32));
  }

}


module.exports = helperFunctions;
