/**
 * Created by adem on 09-Feb-19.
 */

import * as ELEMENTS from 'elements.js';
import {HttpService} from 'httpService.js';
import {OPEN_WEATHER_API_KEY} from 'openWeatherApiKey.js';
import {WeatherData, WEATHER_PROXY_BEHAVIOR} from 'weather-data.js';



ELEMENTS.ELEMENT_SHOW_WEATHER_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_CITY_INPUT.value.trim();
    if(CITY_NAME.length == 0){
        ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
        ELEMENTS.ELEMENT_LOAD_BOX.style.display = 'none';
        return alert('You must enter a city name');
    } else{
        console.log('the user city name value is : ' + CITY_NAME);
        let herokuUrl = 'https://cors-anywhere.herokuapp.com/';
        const URL = herokuUrl + 'http://samples.openweathermap.org/data/2.5/weather?q='+CITY_NAME+'&appid='+OPEN_WEATHER_API_KEY ;
        console.log('The url is : ' + URL);
        ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
        ELEMENTS.ELEMENT_LOAD_BOX.style.display = 'block';
        HttpService.getData(URL).
            then(responseData => {
                console.log(responseData);
                console.log(responseData.weather[0].description);
                console.log(responseData.main.temp)
                const WEATHER_OBJ = new WeatherData(CITY_NAME,responseData.weather[0].description);
                const WEATHER_PROXY = new Proxy(WEATHER_OBJ, WEATHER_PROXY_BEHAVIOR);
                WEATHER_PROXY.temperature = responseData.main.temp;
                updateWeather(WEATHER_PROXY);

        }).catch(error => {alert(error)});
    }

}

function updateWeather(weatherProxy){
    ELEMENTS.ELEMENT_WEATHER_CITY_NAME.textContent = weatherProxy.cityName;
    ELEMENTS.ELEMENT_WEATHER_CITY_DESCRIPTION.textContent = weatherProxy.description;
    ELEMENTS.ELEMENT_WEATHER_CITY_TEMPERATURE.textContent = weatherProxy.temperature;
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
    ELEMENTS.ELEMENT_LOAD_BOX.style.display = 'none';
}