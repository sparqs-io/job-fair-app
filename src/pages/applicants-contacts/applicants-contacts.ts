import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicantsAddressPage } from '../applicants-address/applicants-address';
import { ApplicantsEducationPage } from '../applicants-education/applicants-education';
import { ApplicantsGraduationPage } from '../applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';


import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-applicants-contacts',
  templateUrl: 'applicants-contacts.html'
})
export class ApplicantsContactsPage {

  constructor(public navCtrl: NavController) {
  }
  goToApplicantsAddress(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsAddressPage);
  }goToApplicantsEducation(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsEducationPage);
  }goToApplicantsGraduation(params){
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
