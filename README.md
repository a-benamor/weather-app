## About the project

This project was made for educational purpose only in order to build an interactive web page using ECMAScript 6.  
This is a complete re-write from ECMAScript 5 to ECMAScript 6 of this project [weather-app-es5](https://github.com/abenamor9/weather-app-es5)

It is an application that retrieves and display the temperature and description of the city entered as a parameter.

During the development of this project, I have used the new features offered by the future version of the javascript (ES6) :
* Modularize the code using __classes__, import and export key words.
* Use __let__ and __const__ for block scoping and define constant variable respectively.
* Use __Promises__ when consuming the REST web service exposed by the openWeatherMap API to fetch the weather by city name (an asynchronous task)
* __Proxy and Reflect__ Api to wrap the weather object and transform the temperature data from kelvin to Celsius
* __(Fat) arrow__ function when passing a function as parameter to the promise object 

I have also used
* __SystemJS__ : to load modules
* __Traceur__ to compile the project code from ES6 to ES5 in order to get interpreted by the browser.
* __XMLHttpRequest__ to interact with the openWeatherMap API and fetch the weather of the city passed as 
  parameter

## Prerequisites

In order to use this application, you must specify your API_KEY in open-weather-map-api-key.js file once you have created an account to use the
 [openWeatherMap API](https://openweathermap.org/).

## Youtube video

Here is a descriptive video in which I demonstrate a full user story:
[weather-app](https://youtu.be/G_3h_Ji7NVQ)
