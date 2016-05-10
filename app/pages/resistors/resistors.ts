import {Page} from 'ionic-angular';
import {ResistorComponent} from '../../components/resistor/resistor.component';
import {ResistanceComponent} from '../../components/resistance/resistance.component';
import {ResistorService} from '../../services/resistor/resistor.service';
import {ResistorTableComponent} from '../../components/resistor-table/resistor-table.component';


@Page({
  templateUrl: 'build/pages/resistors/resistors.html',
  directives: [ResistorComponent, ResistanceComponent, ResistorTableComponent],
  providers: [ResistorService]
})
export class ResistorPage {
  selectedItem: any;

  constructor(private _sharedService: ResistorService) {

  }
  
}