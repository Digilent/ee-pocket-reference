import {Page, NavController, Alert} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/resistors/resistors.html'
})
export class ResistorPage {
  selectedItem: any;
  testRadioOpen: boolean;
  color1: any;
  color2: any;
  color3: any;
  colors: string[];
  resistance: number;

  constructor(private nav: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.color1 = 'black';
    this.color2 = 'black';
    this.color3 = 'black';
    
    this.colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white','gold','silver'];
    
    this.resistance = 0;
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
        
    }
    
    calculateColor(resistanceValue) {
      let index = [0, 0, 0];
      index[2] = resistanceValue.toString().length - 2;
      index[1] = resistanceValue.toString()[1];
      index[0] = resistanceValue.toString()[0];
      if (index[2] == -1)
      {
          index[2] = 10;
          index[1] = 0;
      }
      this.color1 = this.colors[index[0]];
      this.color2 = this.colors[index[1]];
      this.color3 = this.colors[index[2]];
  }
  
  doRadio(colorNumber: number, color1: string, color2: string, color3: string) {
    let alert = Alert.create();
    alert.setTitle('Resistor color');

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black',
      checked: true
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Brown',
      value: 'brown'
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Orange',
      value: 'orange'
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Grey',
      value: 'grey'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Gold',
      value: 'gold'
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Silver',
      value: 'silver'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        
        if (colorNumber == 1) {
            this.color1 = data;
        }
        if (colorNumber == 2) {
            this.color2 = data;
        }
        if (colorNumber == 3) {
            this.color3 = data;
        }
        this.calcResistance(this.color1, this.color2, this.color3);
        this.testRadioOpen = false;
      }
    });
    
    this.nav.present(alert).then(() => {
      this.testRadioOpen = true;
    });
  }
}