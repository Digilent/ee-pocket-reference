import {Page, NavController, Alert} from 'ionic-angular';
import {ResistorComponent} from '../../components/resistor/resistor.component';
import {ResistorService} from '../../services/resistor/resistor.service';


@Page({
  templateUrl: 'build/pages/resistors/resistors.html',
  directives: [ResistorComponent],
  providers: [ResistorService]
})
export class ResistorPage {
  selectedItem: any;
  testRadioOpen: boolean;
  color1: any;
  color2: any;
  color3: any;
  colors: string[];
  resistance: number;

  constructor(private nav: NavController, private _sharedService: ResistorService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.color1 = this._sharedService.getColors()[0];
    this.color2 = this._sharedService.getColors()[1];
    this.color3 = this._sharedService.getColors()[2];
    
    this.resistance = this._sharedService.getResistance();

  }
  
  calcResistance(color1: string, color2: string, color3: string) {
      this._sharedService.calcResistance(color1, color2, color3);
      this.resistance = this._sharedService.getResistance();
    }
    
    calculateColor(resistanceValue) {
      let colorArray = this._sharedService.calculateColor(resistanceValue);
      this.color1 = colorArray[0];
      this.color2 = colorArray[1];
      this.color3 = colorArray[2];
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
            this._sharedService.setColors(1, data);
        }
        if (colorNumber == 2) {
            this.color2 = data;
            this._sharedService.setColors(2, data);
        }
        if (colorNumber == 3) {
            this.color3 = data;
            this._sharedService.setColors(3, data);
        }
        this.calcResistance(this.color1, this.color2, this.color3);
        this._sharedService.setResistance(this.resistance);
        this.resistance = this._sharedService.getResistance();
        this.color1 = this._sharedService.getColors()[0];
        this.color2 = this._sharedService.getColors()[1];
        this.color3 = this._sharedService.getColors()[2];
        this.testRadioOpen = false;
      }
    });
    
    this.nav.present(alert).then(() => {
      this.testRadioOpen = true;
    });
  }
}