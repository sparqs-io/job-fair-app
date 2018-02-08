import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntryPagePage } from '../entry-page/entry-page';

@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html'
})
export class ThankYouPage {

  constructor(public navCtrl: NavController) {
  }

  goToEntryPage(params = {}) {
    if (!params) params = {};
    this.navCtrl.push(
      EntryPagePage,
      {},
      { animate: true, direction: "back" }
    );
  }
  
}
