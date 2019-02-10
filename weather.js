/**
 * Created by adem on 10-Feb-19.
 */

export class Weather {
    constructor (description, temperature){
        this._description = description;
        this._temperature = temperature;
    }
    get description(){
        return this._description;
    }
    set description(value){
        this._description = value;
    }
    get temperature(){
        return this._temperature;
    }
    set temperature(value){
        this._temperature = value;
    }
}