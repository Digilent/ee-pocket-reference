import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular'

//Services
import {ResistorService} from '../../services/resistor/resistor.service';

@Component({
  templateUrl: 'build/components/resistance/resistance.html',
  selector: 'resistance',
  directives: [IONIC_DIRECTIVES]
})
export class ResistanceComponent { 
  private resistorService: ResistorService;
  
  constructor(_resistorService: ResistorService) {
      this.resistorService = _resistorService;
  }
  
}