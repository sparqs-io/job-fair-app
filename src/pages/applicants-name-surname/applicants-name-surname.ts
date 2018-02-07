import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicantsContactsPage } from '../applicants-contacts/applicants-contacts';
import { ApplicantsAddressPage } from '../applicants-address/applicants-address';
import { ApplicantsEducationPage } from '../applicants-education/applicants-education';
import { ApplicantsGraduationPage } from '../applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../application-type/application-type';
import { InputReviewPage } from '../input-review/input-review';
import { ThankYouPage } from '../thank-you/thank-you';
import { applicantsData } from '../../models/applicantsData';

@Component({
  selector: 'page-applicants-name-surname',
  templateUrl: 'applicants-name-surname.html'
})
export class ApplicantsNameSurnamePage {
//
  applicantsData= {
    applicantsName: '',
    applicantsSurname: '',
    applicantsPhone: '',
    applicantsEmail: '',
    applicantsZipcode: '',
    applicantsStreetName: '',
    applicantsDegree: '',
    applicantsCourse: '',
    applicantsGraduationDate: '',
    applicantsGraduationStatus: ''
  }
// Test above

  constructor(public navCtrl: NavController) {
  }
  goToApplicantsContacts(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantsContactsPage, {
      //
      item: this.applicantsData
    });
    //
  }goToApplicantsAddress(params){
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
