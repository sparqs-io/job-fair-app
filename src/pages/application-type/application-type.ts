import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-application-type',
  templateUrl: 'application-type.html'
})
export class ApplicationTypePage {

  constructor(public navCtrl: NavController) {
  }
  goToInputReview(params){
    if (!params) params = {};
    this.navCtrl.push(InputReviewPage);
  }goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }
}
