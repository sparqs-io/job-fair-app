import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-input-review',
  templateUrl: 'input-review.html'
})
export class InputReviewPage {

  constructor(public navCtrl: NavController) {
  }
  goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }
}
