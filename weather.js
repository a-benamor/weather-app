/**
 * Created by adem on 10-Feb-19.
 */
const KELVIN_TO_CELCIUS = 273.15;

export class Weather {
    constructor (cityName , description){
        this._cityName = cityName;
        this._description = description;
        this.temperature = '';
    }
    get description(){
        return this._description;
    }
    set description(value){
        this._description = value;
    }
    get cityName(){
        return this._cityName;
    }
    set cityName(value){
        this._cityName = value;
    }
}

export const WEATHER_OBJ_PROXY_BEHAVIOUR = {

    get : function(target, property){
        return Reflect.get(target, property);
    },
    set : function(target, property, value){
        if(property = 'temperature'){
            const newValue = (value - KELVIN_TO_CELCIUS) + ' °C';
            Reflect.set(target, property, newValue);
            return true;
        }

    }
}
















