import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplicantsNameSurnamePage } from '../applicants-name-surname/applicants-name-surname';
import { ApplicantsContactsPage } from '../applicants-contacts/applicants-contacts';
import { ApplicantsAddressPage } from '../applicants-address/applicants-address';
import { ApplicantsEducationPage } from '../applicants-education/applicants-education';
import { ApplicantsGraduationPage } from '../applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';
import { EntryPagePage } from '../entry-page/entry-page';

/**
 * Generated class for the LoginScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-screen',
  templateUrl: 'login-screen.html',
})
export class LoginScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }goToLoginScreen(params){
    if (!params) params = {};
    this.navCtrl.push(LoginScreenPage,{},{animate: true, direction: 'forward'});
  }goToEntryPage(params){
    if (!params) params = {};
    this.navCtrl.push(EntryPagePage,{},{animate: true, direction: 'forward'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScreenPage');
  }

}
