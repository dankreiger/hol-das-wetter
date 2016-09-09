Hol das Wetter!
==============

[![Build Status](https://travis-ci.org/dankreiger/hol-das-wetter.svg?branch=master)](https://travis-ci.org/dankreiger/hol-das-wetter)
![hol das wetter dev dependencies status](https://david-dm.org/dankreiger/hol-das-wetter.svg)



![Alt text](https://monosnap.com/file/Lm1WJHLpK6UOtTwRBjUgT0KAlsjRiX.png)



### Table of Contents
*   [Prerequisites](#prerequisites)
*   [Quickstart (Mac OS X)](#quickstart-for-mac-os-x-only)

* * *



### Prerequisites

- Please make sure [NodeJS](https://nodejs.org/) is installed first.

  - Check via the command line:
  ```bash
  $ node --version
  ```

### Quickstart for Mac OS X only

1. Clone this repository:
  ```bash
  $ git clone https://github.com/dankreiger/hol-das-wetter.git
  $ cd hol-das-wetter/
  ```

2. Sign up for the [Open Weather Map API](http://openweathermap.org/api).

3. Create `src/owmApiKey.js` and enter your API key in it as a string. Create the file from the command line:
```bash
$ touch src/owmApiKey.js
```
And export your API key in `src/owmApiKey.js` like this: 
```javascript
module.exports='YOUR_OPEN_WEATHER_MAP_API_KEY';
```   

4. Start the watchify script:
```bash
$ npm start
```

5. Open up a new terminal tab or window and start the http-server:
  ```bash
  $ npm install -g http-server  
  $ http-server
  ```

6. Go to [localhost:8080](http://localhost:8080) or http://127.0.0.1:8080 in your browser. The weather widget should be up and ready to use.


 [React](http://facebook.github.io/react/) Weather App using [Fetch](https://github.com/github/fetch) and [Open Weather Map](http://openweathermap.org/).


 [![](http://javascriptismagic.github.io/aui/logos/react.png) ](http://facebook.github.io/react/)[![](https://pbs.twimg.com/profile_images/720298646630084608/wb7LSoAc_reasonably_small.jpg) ](http://www.openweathermap.org/api) [![](https://38.media.tumblr.com/avatar_42a712c20cf7_128.png)](http://github.com/github/fetch)
