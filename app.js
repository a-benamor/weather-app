/**
 * Created by adem on 09-Feb-19.
 */
import {searchWeatherBtn, cityInput, weatherDescriptionElement, weatherTemperatureElement, weatherBox,
loadBox, weatherCityHeader} from 'htmlElements.js';
import {OPEN_WEATHER_MAP_API_KEY} from 'openWeatherMapApiKey.js';
import {Weather} from 'weather.js';

searchWeatherBtn.addEventListener('click', searchWeather);

function searchWeather(){
    console.log('Begin search weather method');
    let cityNameValue = cityInput.value;
    console.log(cityNameValue);
    weatherBox.style.display = 'none';
    if(cityNameValue.trim().length == 0){
        return alert('Enter city name value');
    }else {
       getWeatherByCityNameAndUpdateHtmlPage(cityNameValue.trim());
    }
}

function getWeatherByCityNameAndUpdateHtmlPage(cityName){
    // Using the XHR to interact with openWeatherMap Api, AJAX programming
    let http = new XMLHttpRequest();
    let getMethod = 'GET';
    let getWeatherUrl = 'http://samples.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+OPEN_WEATHER_MAP_API_KEY;
    console.log(getWeatherUrl);
    // initialize the request
    http.open(getMethod, getWeatherUrl);

    http.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status == '200'){
            if(http.responseText != null){
                let cityWeatherResponse = http.responseText;
                let cityWeatherDescription = cityWeatherResponse.weather.description;
                let cityWeatherTemperature = cityWeatherResponse.main.temp;
                let weatherObj = new Weather(cityWeatherDescription,cityWeatherTemperature );
                weatherBox.style.display = 'block';
                updateWeatherBox(weather,cityName );
                loadBox.style.display = 'none';

            }

        }else if( this.readyState === XMLHttpRequest.DONE) {
            return window.alert('An error occured !!');
        }
    }

    // Send the request
    http.send();

}

function updateWeatherBox(weather, cityName){
    console.log('Begin updateWeatherBox function');
    weatherDescriptionElement.textContent = weather.description;
    weatherTemperatureElement.textContent = weather.temperature;
    weatherCityHeader.textContent = cityName;
}






