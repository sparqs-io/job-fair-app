import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-applicants-graduation',
  templateUrl: 'applicants-graduation.html'
})
export class ApplicantsGraduationPage {

  constructor(public navCtrl: NavController) {
  }
  goToApplicationType(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicationTypePage);
  }goToInputReview(params){
    if (!params) params = {};
    this.navCtrl.push(InputReviewPage);
  }goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }
}
