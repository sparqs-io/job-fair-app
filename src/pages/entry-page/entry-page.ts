import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicantsNameSurnamePage } from '../applicants-name-surname/applicants-name-surname';
import { ApplicantsContactsPage } from '../applicants-contacts/applicants-contacts';
import { ApplicantsAddressPage } from '../applicants-address/applicants-address';
import { ApplicantsEducationPage } from '../applicants-education/applicants-education';
import { ApplicantsGraduationPage } from '../applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-entry-page',
  templateUrl: 'entry-page.html'
})
export class EntryPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToApplicantsNameSurname(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsNameSurnamePage,{},{animate: true, direction: 'forward'});
  }goToApplicantsContacts(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsContactsPage,{},{animate: true, direction: 'forward'});
  }goToApplicantsAddress(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsAddressPage,{},{animate: true, direction: 'forward'});
  }goToApplicantsEducation(params){
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
