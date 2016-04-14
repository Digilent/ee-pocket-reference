import {Page, NavController, Alert} from 'ionic-angular';
import {ResistorComponent} from '../../components/resistor/resistor.component';
import {ResistanceComponent} from '../../components/resistance/resistance.component';
import {ResistorService} from '../../services/resistor/resistor.service';


@Page({
  templateUrl: 'build/pages/resistors/resistors.html',
  directives: [ResistorComponent, ResistanceComponent],
  providers: [ResistorService]
})
export class ResistorPage {
  selectedItem: any;

  constructor(private nav: NavController, private _sharedService: ResistorService) {

  }
  
}