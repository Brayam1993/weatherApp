export class Weather {
    constructor(city, countryCode) {
        this.apikey = '3e96a31a2d81e4d2d772c8ed4da7b057';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`
        const data =await fetch(URI);
        return data;
    }
};