/******************************************************************************
* EE Pocket Reference                                                          
*                                                           
* Source: https://github.com/Digilent/ee-pocket-reference  
* Copyright (c) 2016, Digilent <www.digilent.com>                                                                 
******************************************************************************/

import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

//Pages
import {ResistorCalculatorPage} from './pages/resistor-calculator/resistor-calculator';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class EePocketRef {
    
  private app: IonicApp;
  private platform: Platform;
  private menu: MenuController;
  
  rootPage: any = ResistorCalculatorPage;
  pages: Array<{title: string, component: any}>;

  constructor(_app: IonicApp, _platform: Platform, _menu: MenuController) {
    this.app = _app;
    this.platform = _platform;
    this.menu = _menu;
    
    this.initializeApp();

    this.pages = [
      { title: 'Resistor Calculator', component: ResistorCalculatorPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
