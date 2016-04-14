import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ResistorService} from '../../services/resistor/resistor.service';
import {NavController, Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/components/resistor/resistor.html',
  selector: 'resistor'
})
export class ResistorComponent {
    testRadioOpen: boolean;  

  constructor(private nav: NavController, private _sharedService: ResistorService) {

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
            this._sharedService.color1 = data;
        }
        if (colorNumber == 2) {
            this._sharedService.color2 = data;
        }
        if (colorNumber == 3) {
            this._sharedService.color3 = data;
        }
        this._sharedService.calcResistance(this._sharedService.color1, this._sharedService.color2, this._sharedService.color3);
        this.testRadioOpen = false;
      }
    });
    
    this.nav.present(alert).then(() => {
      this.testRadioOpen = true;
    });
  }
  
}