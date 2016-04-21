import {Injectable} from 'angular2/core';

@Injectable()
export class ResistorService {
    public color1: any;
    public color2: any;
    public color3: any;
    private colors: string[];
    public resistance: number;
    
    constructor() {
    this.color1 = 'brown';
    this.color2 = 'black';
    this.color3 = 'red';
    this.colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white','gold','silver'];
    
    this.resistance = 1000;
    }
    
    getColors() {
        return [this.color1, this.color2, this.color3];
    }
    getResistance() {
        return this.resistance;
    }
    
    setColors(colorNumber: number, newColor: string) {
        if (colorNumber == 1) {
            this.color1 = newColor;
        }
        else if (colorNumber == 2) {
            this.color2 = newColor;
        }
        else if (colorNumber == 3) {
            this.color3 = newColor;
        }
        //Now update resistance
        this.calcResistance(this.color1, this.color2, this.color3);
    }
    
    setResistance(resistanceValue) {
        this.resistance = resistanceValue;
        this.calculateColor(this.resistance);
    }
    
    calcResistance(color1: string, color2: string, color3: string) {
        let index = [0, 0, 0];
        let swag = 0;
        for (let i = 0; i < this.colors.length; i++) {
            if (color1 == this.colors[i]) {
                index[0] = i;
            }
            if (color2 == this.colors[i]) {
                index[1] = i;
            }
            if (color3 == this.colors[i]) {
                index[2] = i;
            }
        }
        if (index[2] == 10) {
            index[2] = -1;
        }
        if (index[2] == 11) {
            index[2] = -2;
        }
        this.resistance = Number(index[0].toString() + index[1].toString()) * Math.pow(10, index[2]);
        return this.resistance;
    }
    
    calculateColor(resistanceValue) {
      let index = [0, 0, 0];
      index[2] = resistanceValue.toString().length - 2;
      index[1] = resistanceValue.toString()[1];
      index[0] = resistanceValue.toString()[0];
      if (index[2] == -1) {
          index[2] = 10;
          index[1] = 0;
      }
      this.color1 = this.colors[index[0]];
      this.color2 = this.colors[index[1]];
      this.color3 = this.colors[index[2]];
      this.resistance = resistanceValue;
      return [this.color1, this.color2, this.color3];
      }
    
}