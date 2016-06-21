### Hol das Wetter!


Instant shell script setup for a React Weather App API using <a href="https://github.com/github/fetch">Fetch</a> and <a href="http://openweathermap.org/">Open Weather Map</a>.

- Please make sure <a href="https://nodejs.org/">NodeJS</a> is installed first.

  - Check via the command line:
  ```bash
  $ node --version
  ```

- Quickstart for Mac OS X only

  - Clone this repository and run the setup script:
  ```bash
  $ git clone https://github.com/dankreiger/hol-das-wetter.git
  $ cd hol-das-wetter/
  $ chmod +x ./auto_setup.sh
  $ chmod +x ./remove_defaults.sh
  $ ./auto_setup.sh
  ```

  - Sign up for the <a href="http://openweathermap.org/api">Open Weather Map API</a> and enter your API key in <code>src/owmApiKey.js</code>
  ```javascript
  // src/owmApiKey.js
  module.exports='YOUR_OPEN_WEATHER_MAP_API_KEY';
  ```
      - replace 'YOUR_OPEN_WEATHER_MAP_API_KEY' with your API Key (make sure to leave it as a string)    

  - After making updates, shut down and restart the npm script:
  ```bash
  Ctrl+C
  $ npm start
  ```

  - Open up a new terminal tab or window and start the http-server:
  ```bash
  $ http-server
  ```

Go to [localhost:8080](http://localhost:8080) or http://127.0.0.1:8080 in your browser. The weather widget should be up and ready to use.
