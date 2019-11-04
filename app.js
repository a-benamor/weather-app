/**
 * Created by adem on 09-Feb-19.
 */

import * as ELEMENTS from 'html-elements.js';
import OPEN_WEATHER_MAP_API_KEY from 'open-weather-map-api-key.js';
import {Weather, WEATHER_OBJ_PROXY_BEHAVIOUR} from 'weather.js';
import {HttpService} from 'http-service.js';
ELEMENTS.SEARCH_WEATHER_BTN.addEventListener('click', searchWeather);

function searchWeather(){
    const USER_CITY_NAME = ELEMENTS.CITY_INPUT.value;
    ELEMENTS.WEATHER_BOX.style.display = 'none';
    ELEMENTS.LOAD_BOX.style.display = 'none';
    if(USER_CITY_NAME.trim().length == 0){
        return alert('City name is required!');
    }else {
       getWeatherByCityNameAndUpdateHtmlPage(USER_CITY_NAME.trim());
    }
}

function getWeatherByCityNameAndUpdateHtmlPage(cityName){
    const HOROKU_URL = 'https://cors-anywhere.herokuapp.com/';
    const GET_WEATHER_URL = HOROKU_URL + 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+OPEN_WEATHER_MAP_API_KEY;
    ELEMENTS.LOAD_BOX.style.display = 'block';
    HttpService.getData(GET_WEATHER_URL).then(
        (responseText) => {
            console.log('success call of the open weather API!');
            const WEATHER_OBJ = new Weather(responseText.name, responseText.weather[0].description);
            const WEATHER_PROXY = new Proxy(WEATHER_OBJ, WEATHER_OBJ_PROXY_BEHAVIOUR);
            WEATHER_PROXY.temperature = responseText.main.temp;
            updateWeatherBox(WEATHER_PROXY);
        }
    ).catch(
        (errorResponse => {
            console.log('Failed to call open weather API!')
            console.log(errorResponse);
            ELEMENTS.WEATHER_BOX.style.display = 'none';
            ELEMENTS.LOAD_BOX.style.display = 'none';
            return alert('Error! : '+ errorResponse.cod + ' ' + errorResponse.message);
        })
    )

}

function updateWeatherBox(weather){
    ELEMENTS.WEATHER_DESCRIPTIN_DIV.textContent = weather.description;
    ELEMENTS.WEATHER_TEMPERATURE_DIV.textContent = weather.temperature;
    ELEMENTS.WEATHER_CITY_H.textContent = weather.cityName;
    ELEMENTS.WEATHER_BOX.style.display = 'block';
    ELEMENTS.LOAD_BOX.style.display = 'none';
}
