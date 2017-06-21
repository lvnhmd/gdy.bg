import axios from 'axios';

const API_KEY = '163cd206d9cb3e7d33ba8051ddf2d6bf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request : ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}