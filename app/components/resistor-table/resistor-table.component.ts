import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {IONIC_DIRECTIVES} from 'ionic-angular';

//Services
import {ResistorService} from '../../services/resistor/resistor.service';

@Component({
  templateUrl: 'build/components/resistor-table/resistor-table.html',
  selector: 'resistor-table',
  directives: [IONIC_DIRECTIVES, NgClass]
})
export class ResistorTableComponent { 
  private resistorService: ResistorService;
    
  constructor(_resistorService: ResistorService) {
      this.resistorService = _resistorService;
  }
  
  //When a color is selected, set that color to the corresponding resistor color
  selectColor(column: number, color: string) {
      if (column == 1) {
          this.resistorService.color1 = color;
      }
      else if (column == 2) {
          this.resistorService.color2 = color;
      }
      else {
          this.resistorService.color3 = color;
      }
      this.resistorService.calcResistance(this.resistorService.color1, this.resistorService.color2, this.resistorService.color3);
  }
  
  //Determines if a specific column's color matches the corresponding resistor color band.
  isSelected(column: number, color: string) {
      if (column == 1 && color == this.resistorService.color1) {
          return true;
      }
      else if (column == 2 && color == this.resistorService.color2) {
          return true;
      }
      else if (column == 3 && color == this.resistorService.color3) {
          return true;
      }
      else {
          return false;
      }
  }
  
}