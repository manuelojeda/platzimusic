import config from './config';
const API_KEY = config.apiKey;
const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${API_KEY}&format=json`;