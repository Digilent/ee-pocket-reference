import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ResistorService} from '../../services/resistor/resistor.service';

@Component({
  templateUrl: 'build/components/resistor/resistor.html',
  selector: 'resistor'
})
export class ResistorComponent {  

  constructor(private _sharedService: ResistorService) {

  }
  
}