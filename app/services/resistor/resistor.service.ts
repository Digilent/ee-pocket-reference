import {Injectable} from 'angular2/core';

@Injectable()
export class ResistorService {
    public color1: string;
    public color2: string;
    public color3: string;
    private colors: string[];
    public resistance: number;
    
    constructor() {
        this.color1 = 'brown';
        this.color2 = 'black';
        this.color3 = 'red';
        this.colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white','gold','silver'];
        
        this.resistance = 1000;
    }
    
    //Calculates resistance from color values
    calcResistance(color1: string, color2: string, color3: string) {
        let colorIndex = [0, 0, 0];
        colorIndex[0] = this.colors.indexOf(color1);
        colorIndex[1] = this.colors.indexOf(color2);
        colorIndex[2] = this.colors.indexOf(color3);
        if (colorIndex[2] == 10 || colorIndex[2] == 11) {
            colorIndex[2] = (-1 * colorIndex[2]) + 9;
            this.resistance = Number((Number(colorIndex[0].toString() + colorIndex[1].toString()) * Math.pow(10, colorIndex[2])).toFixed(2));
            return this.resistance;
        }
        this.resistance = Number(colorIndex[0].toString() + colorIndex[1].toString()) * Math.pow(10, colorIndex[2]);
        return this.resistance;
    }
    
    //Calculates colors from resistance value
    calcColor(resistanceValue: number) {
        let resistanceString = resistanceValue.toString();
        let length = resistanceString.length;
        let decimalIndex = resistanceString.indexOf('.');
        
        //not done need to make smaller
        if (decimalIndex === -1 && length > 1) {
            //no dot
            this.color1 = this.colors[resistanceString[0]];
            this.color2 = this.colors[resistanceString[1]];
            this.color3 = this.colors[(length - 2)];
            this.resistance = resistanceValue;
            return [this.color1, this.color2, this.color3];
        }
        else if (decimalIndex == 0 || (decimalIndex == 1 && resistanceString[0] == '0')) {
            if (length < 4) {
                this.color1 = this.colors[resistanceString[length - 1]];
                this.color2 = 'black';
                this.color3 = 'silver';
                return [this.color1, this.color2, this.color3];
            }
            else {
                //round and silver
                this.color1 = this.colors[resistanceString[2]];
                this.color2 = this.colors[resistanceString[3]];
                this.color3 = 'silver';
                return [this.color1, this.color2, this.color3];
            }
        }
        else if ((decimalIndex == 1 && resistanceString[0] != '0') || length == 1) {
            if (length == 1) {
                this.color1 = this.colors[resistanceString[0]];
                this.color2 = 'black';
                this.color3 = 'gold';
                return [this.color1, this.color2, this.color3];
            }
            else {
                this.color1 = this.colors[resistanceString[0]];
                this.color2 = this.colors[resistanceString[2]];
                this.color3 = 'gold';
                return [this.color1, this.color2, this.color3]; 
            }
        }
        else {
            //error
            return [this.color1, this.color2, this.color3];
        }
    }
}