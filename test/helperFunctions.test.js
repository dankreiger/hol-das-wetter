var test = require('tape');
var helperFunctions = require('../src/helperFunctions.js');
var hf = new helperFunctions();

// converts celsius to fahrenheit
test('to fahrenheit function', function (t) {
    t.plan(7);
    t.equal(hf.toFahrenheit(0), 32);
    t.equal(hf.toFahrenheit(100), 212);
    t.equal(hf.toFahrenheit(12), 54);
    t.equal(hf.toFahrenheit(2), 36);
    t.notEquals(hf.toFahrenheit(2), 5);
    t.notEquals(hf.toFahrenheit(205), 0);
    t.notEquals(hf.toFahrenheit(40), -50);
});

// converts string to title case
test('to title case function', function (t) {
    t.plan(7);
    t.equal(hf.toTitleCase("the small puppy"), "The Small Puppy");
    t.equal(hf.toTitleCase("hi"), "Hi");
    t.equal(hf.toTitleCase("neither from itself nor from another, nor from both, nor without a cause, does anything whatever, anywhere arise" ),
                            "Neither From Itself Nor From Another, Nor From Both, Nor Without A Cause, Does Anything Whatever, Anywhere Arise");
    t.equal(hf.toTitleCase("gesund sein ist so schön, wenn man nicht allein sein muß"),
                          "Gesund Sein Ist So Schön, Wenn Man Nicht Allein Sein Muß");
    t.equal(hf.toTitleCase("hi" + " " + "again"), "Hi Again");
    t.notEquals(hf.toTitleCase("hi again"), "hi again");
    t.notEquals(hf.toTitleCase("hi"), "hi");
});

// converts UTC timestamp into a readable date
test('formatted date function', function (t) {
    t.plan(4);
    t.equal(hf.formattedDate(1467778698), "Wed, 06 Jul 2016");
    t.equal(hf.formattedDate(1364774398), "Sun, 31 Mar 2013");
    t.equal(hf.formattedDate(1267778698), "Fri, 05 Mar 2010");
    t.equal(hf.formattedDate(2935557396), "Tue, 09 Jan 2063");
});


// assigns background image according to icon code
test('evaluate icon function for backgound images', function (t) {
    t.plan(18);
    t.equal(hf.evalIcon("01d").backgroundPhoto, "images/sunny.jpg");
    t.equal(hf.evalIcon("02d").backgroundPhoto, "images/fewClouds.jpg");
    t.equal(hf.evalIcon("03d").backgroundPhoto, "images/scatteredClouds.jpg");
    t.equal(hf.evalIcon("04d").backgroundPhoto, "images/brokenClouds.jpg");
    t.equal(hf.evalIcon("09d").backgroundPhoto, "images/lightRain.jpg");
    t.equal(hf.evalIcon("10d").backgroundPhoto, "images/rain.jpg");
    t.equal(hf.evalIcon("11d").backgroundPhoto, "images/thunderstorm.jpg");
    t.equal(hf.evalIcon("13d").backgroundPhoto, "images/snow.jpg");
    t.equal(hf.evalIcon("50d").backgroundPhoto, "images/windy.jpg");
    t.equal(hf.evalIcon("01n").backgroundPhoto, "images/clearNight.jpg");
    t.equal(hf.evalIcon("02n").backgroundPhoto, "images/fewCloudsNight.jpg");
    t.equal(hf.evalIcon("03n").backgroundPhoto, "images/scatteredCloudsNight.jpg");
    t.equal(hf.evalIcon("04n").backgroundPhoto, "images/brokenCloudsNight.jpg");
    t.equal(hf.evalIcon("09n").backgroundPhoto, "images/rain.jpg");
    t.equal(hf.evalIcon("10n").backgroundPhoto, "images/clouds.jpg");
    t.equal(hf.evalIcon("11n").backgroundPhoto, "images/thunderstorm.jpg");
    t.equal(hf.evalIcon("13n").backgroundPhoto, "images/snow.jpg");
    t.equal(hf.evalIcon("50n").backgroundPhoto, "images/clouds.jpg");
});

// assigns icon class name according to icon code
test('evaluate icon function for icon class names', function (t) {
    t.plan(18);
    t.equal(hf.evalIcon("01d").icon, "wi wi-day-sunny");
    t.equal(hf.evalIcon("02d").icon, "wi wi-day-cloudy");
    t.equal(hf.evalIcon("03d").icon, "wi wi-cloud");
    t.equal(hf.evalIcon("04d").icon, "wi wi-cloudy");
    t.equal(hf.evalIcon("09d").icon, "wi wi-rain");
    t.equal(hf.evalIcon("10d").icon, "wi wi-day-rain");
    t.equal(hf.evalIcon("11d").icon, "wi wi-thunderstorm");
    t.equal(hf.evalIcon("13d").icon, "wi wi-snow");
    t.equal(hf.evalIcon("50d").icon, "wi wi-windy");
    t.equal(hf.evalIcon("01n").icon, "wi wi-night-clear");
    t.equal(hf.evalIcon("02n").icon, "wi wi-night-alt-cloudy");
    t.equal(hf.evalIcon("03n").icon, "wi wi-cloud");
    t.equal(hf.evalIcon("04n").icon, "wi wi-cloudy");
    t.equal(hf.evalIcon("09n").icon, "wi wi-rain");
    t.equal(hf.evalIcon("10n").icon, "wi wi-night-alt-rain");
    t.equal(hf.evalIcon("11n").icon, "wi wi-thunderstorm");
    t.equal(hf.evalIcon("13n").icon, "wi wi-snow");
    t.equal(hf.evalIcon("50n").icon, "wi wi-windy");
});
