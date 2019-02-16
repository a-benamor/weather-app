## About the project

This project was made for educational purpose only in order to build an interactive web page using ECMAScript 6:

It is an application that retrieves and display the temperature and description of the city entered as a parameter.

During the development of this project, I have used the new features offered by the future version of the javascript (ES6) :
* Modularize the code using classes, import and export key words.
* Promises when calling the openWeatherMap API to fetch the weather by city name (an asynchronous task).
* Proxy and Reflect Api to wrap the weather object and transform the temperature data from Celsius to Fahrenheit.
* Fat arrow function when passing a function as parameter to the promise object.

I have also used
* SystemJS : to load classes
* Traceur to compile the project code from ES6 to ES5 in order to get interpreted by the navigator.
* XMLHttpRequest to interact with the openWeatherMap API and fetch the weather of the city passed as 
  parameter.

## Prerequisites

In order to use this application, you must specify your API_KEY in open-weather-api-key.js file once you create an account to use the
 [openWeatherMap API](https://openweathermap.org/).

## Youtube video

Here is a descriptive video in which I demonstrate a full user story:
