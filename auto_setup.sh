#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m' # No Color

RDEF=$(printf "\n\n \xF0\x9F\x90\xB6 Removing node files${NC}")
echo $RDEF
./remove_defaults.sh

cat > ./src/owmApiKey.js << EOF
// Please visit http://openweathermap.org/api and sign up for an API KEY
module.exports='YOUR_OPEN_WEATHER_MAP_API_KEY';
EOF

FILL_IN=$(printf "\n\n \xF0\x9F\x90\xB6 ${GREEN}Fill in app info (or just press enter for each line):${NC}")
echo $FILL_IN
npm init
npmglobals=('browserify' 'json' 'http-server' 'faucet')
npmmodules=('react' 'react-dom' 'babelify' 'watchify' 'babel-preset-react' 'whatwg-fetch' 'country-data' 'classnames')
for i in "${npmglobals[@]}";do npm install -g $i; done
for j in "${npmmodules[@]}";do npm install --save $j; done
npm install tape --save-dev

touch ./public/js/main.js

json -I -f package.json -e 'this.scripts={
    "start": "watchify src/main.jsx -t [babelify --presets [ react ] ] -o public/js/main.js -v",
    "test": "node test/*.test.js"
  }'

npm start
