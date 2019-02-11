/**
 * Created by adem on 09-Feb-19.
 */

import * as ELEMENTS from 'elements.js';
import {HttpService} from 'httpService.js';
import {OPEN_WEATHER_API_KEY} from 'openWeatherApiKey.js';



ELEMENTS.ELEMENT_SHOW_WEATHER_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_CITY_INPUT.value.trim();
    if(CITY_NAME.length == 0){
        return alert('You must enter a city name');
    } else{
        console.log('the user city name value is : ' + CITY_NAME);
        const URL = 'http://samples.openweathermap.org/data/2.5/weather?q='+CITY_NAME+'&appid='+OPEN_WEATHER_API_KEY ;
        console.log('The url is : ' + URL);
        HttpService.getData(URL).
            then(responseData => {

        }).catch(error => {alert(error)});
    }

}