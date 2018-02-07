import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicantsEducationPage } from '../applicants-education/applicants-education';
import { ApplicantsGraduationPage } from '../applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-applicants-address',
  templateUrl: 'applicants-address.html'
})
export class ApplicantsAddressPage {

  constructor(public navCtrl: NavController) {
  }
  goToApplicantsEducation(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsEducationPage,{},{animate: true, direction: 'forward'});
  }goToApplicantsGraduation(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsGraduationPage,{},{animate: true, direction: 'forward'});
  }goToApplicationType(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicationTypePage,{},{animate: true, direction: 'forward'});
  }goToInputReview(params){
    if (!params) params = {};
    this.navCtrl.push(InputReviewPage,{},{animate: true, direction: 'forward'});
  }goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage,{},{animate: true, direction: 'forward'});
  }
}
