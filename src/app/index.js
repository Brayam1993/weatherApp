const { Weather } = require('./weather');
const weather = new Weather('London','uk')
require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather)