Hol das Wetter!
==============

[![Build Status](https://travis-ci.org/dankreiger/hol-das-wetter.svg?branch=master)](https://travis-ci.org/dankreiger/hol-das-wetter)

[![](http://javascriptismagic.github.io/aui/logos/react.png) ](http://facebook.github.io/react/)[![](https://pbs.twimg.com/profile_images/720298646630084608/wb7LSoAc_reasonably_small.jpg) ](http://www.openweathermap.org/api) [![](https://38.media.tumblr.com/avatar_42a712c20cf7_128.png)](http://github.com/github/fetch)

Instant shell script setup for a [React](http://facebook.github.io/react/) Weather App API using [Fetch](https://github.com/github/fetch) and [Open Weather Map](http://openweathermap.org/).


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

1. Clone this repository and run the setup script:
  ```bash
  $ git clone https://github.com/dankreiger/hol-das-wetter.git
  $ cd hol-das-wetter/
  $ chmod +x ./auto_setup.sh
  $ chmod +x ./remove_defaults.sh
  $ ./auto_setup.sh
  ```

2. Sign up for the [Open Weather Map API](http://openweathermap.org/api) and enter your API key in `src/owmApiKey.js`
  ```javascript
  // src/owmApiKey.js

  // replace 'YOUR_OPEN_WEATHER_MAP_API_KEY' with your API Key
  // make sure to leave it as a string
  module.exports='YOUR_OPEN_WEATHER_MAP_API_KEY';
  ```   

3. After making updates, shut down and restart the npm script:
  ```bash
  Ctrl+C
  $ npm start
  ```

4. Open up a new terminal tab or window and start the http-server:
  ```bash
  $ http-server
  ```

5. Go to [localhost:8080](http://localhost:8080) or http://127.0.0.1:8080 in your browser. The weather widget should be up and ready to use.
