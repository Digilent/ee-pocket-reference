import {Component} from 'angular2/core';
import {ResistorService} from '../../services/resistor/resistor.service';
import {IONIC_DIRECTIVES} from 'ionic-angular'

@Component({
  templateUrl: 'build/components/resistance/resistance.html',
  selector: 'resistance',
  directives: [IONIC_DIRECTIVES]
})
export class ResistanceComponent { 

  constructor(private _sharedService: ResistorService) {

  }
  
}