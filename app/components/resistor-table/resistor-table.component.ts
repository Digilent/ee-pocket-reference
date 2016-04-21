import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {ResistorService} from '../../services/resistor/resistor.service';
import {IONIC_DIRECTIVES} from 'ionic-angular'

@Component({
  templateUrl: 'build/components/resistor-table/resistor-table.html',
  selector: 'resistor-table',
  directives: [IONIC_DIRECTIVES, NgClass]
})
export class ResistorTableComponent { 
    
  constructor(private _sharedService: ResistorService) {
      
  }
  
  colorSelect(column: number, color: string) {
      if (column == 1) {
          this._sharedService.color1 = color;
      }
      else if (column == 2) {
          this._sharedService.color2 = color;
      }
      else {
          this._sharedService.color3 = color;
      }
      this._sharedService.calcResistance(this._sharedService.color1, this._sharedService.color2, this._sharedService.color3);
  }
  
  isSelected(column: number, color: string) {
      if (column == 1) {
          if (color == this._sharedService.color1) {
              return true;
          }
          else {
              return false;
          }
      }
      else if (column == 2) {
          if (color == this._sharedService.color2) {
              return true;
          }
          else {
              return false;
          }
      }
      else {
          if (color == this._sharedService.color3) {
              return true;
          }
          else {
              return false;
          }
      }
  }
  
}