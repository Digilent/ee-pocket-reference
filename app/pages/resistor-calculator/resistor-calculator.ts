import {Page} from 'ionic-angular';

//Components
import {ResistorComponent} from '../../components/resistor/resistor.component';
import {ResistanceComponent} from '../../components/resistance/resistance.component';
import {ResistorTableComponent} from '../../components/resistor-table/resistor-table.component';

//Services
import {ResistorService} from '../../services/resistor/resistor.service';

@Page({
  templateUrl: 'build/pages/resistor-calculator/resistor-calculator.html',
  directives: [ResistorComponent, ResistanceComponent, ResistorTableComponent],
  providers: [ResistorService]
})
export class ResistorCalculatorPage {
  private resistorService: ResistorService;
  
  constructor(_resistorService: ResistorService) {
      this.resistorService = _resistorService;
  }
  
}