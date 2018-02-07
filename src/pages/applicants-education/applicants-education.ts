import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicantsGraduationPage } from '../applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-applicants-education',
  templateUrl: 'applicants-education.html'
})
export class ApplicantsEducationPage {

  constructor(public navCtrl: NavController) {
  }
  goToApplicantsGraduation(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsGraduationPage);
  }goToApplicationType(params){
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
