import {Component} from 'angular2/core';
import {NavController, Alert} from 'ionic-angular';

//Services
import {ResistorService} from '../../services/resistor/resistor.service';

@Component({
  templateUrl: 'build/components/resistor/resistor.html',
  selector: 'resistor'
})
export class ResistorComponent {
    nav: NavController;
    private resistorService: ResistorService;
    
    radioOpen: boolean;  

  constructor(_nav: NavController, _resistorService: ResistorService) {
      this.resistorService = _resistorService;
      this.nav = _nav;
  }
  
  //Open radio alert and present options. Set new color and recalculate resistance.
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
      label: 'Violet',
      value: 'violet'
    });
    
    if (colorNumber < 3) {
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
    }
    
    if (colorNumber == 3) {
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
    }
    

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        
        if (colorNumber == 1) {
            this.resistorService.color1 = data;
        }
        if (colorNumber == 2) {
            this.resistorService.color2 = data;
        }
        if (colorNumber == 3) {
            this.resistorService.color3 = data;
        }
        this.resistorService.calcResistance(this.resistorService.color1, this.resistorService.color2, this.resistorService.color3);
        this.radioOpen = false;
      }
    });
    
    this.nav.present(alert).then(() => {
      this.radioOpen = true;
    });
  }
  
}