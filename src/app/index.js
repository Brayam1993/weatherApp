const { Weather } = require('./weather');
const { UI } = require('./ui')

const ui = new UI();
const weather = new Weather('London','uk')

require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data)
}

document.addEventListener('DOMContentLoaded', fetchWeather)