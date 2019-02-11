/**
 * Created by adem on 09-Feb-19.
 */

import * as ELEMENTS from 'elements.js';

ELEMENTS.ELEMENT_SHOW_WEATHER_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_CITY_INPUT.value.trim();
    if(CITY_NAME.length == 0){
        return alert('You must enter a city name');
    } else{
        alert(CITY_NAME);
    }

}