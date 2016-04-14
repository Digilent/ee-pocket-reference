import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ResistorService} from '../../services/resistor/resistor.service';
import {IONIC_DIRECTIVES} from 'ionic-angular'

@Component({
  templateUrl: 'build/components/resistor-table/resistor-table.html',
  selector: 'resistor-table',
  directives: [IONIC_DIRECTIVES]
})
export class ResistorTableComponent { 

  constructor(private _sharedService: ResistorService) {

  }
  
}