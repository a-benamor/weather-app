/**
 * Created by adem on 13-Feb-19.
 */

export class WeatherData {
    constructor(cityName, description){
        this.cityName = cityName;
        this.description = description;
        this.temperature = '';
    }
}



 export const WEATHER_PROXY_BEHAVIOR = {
    get: function(target, propertyName){
        return Reflect.get(target, propertyName);
    },
    set: function(target, property, value){
            const newValue = ( (value * 1.8) + 32) + 'F.';
            Reflect.set(target, property, newValue);
            return true;
    }
}