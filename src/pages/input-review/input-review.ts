import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ThankYouPage } from "../thank-you/thank-you";
import { ApplicantsDataProvider } from "../../providers/applicants-data/applicants-data";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: "page-input-review",
  templateUrl: "input-review.html"
})
export class InputReviewPage {
  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public applicantsDataProvider: ApplicantsDataProvider
  ) {
    applicantsDataProvider.applicantsData.applicationType
  }
  goToThankYou(params) {
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }
  saveApplicantsData() {
    this.applicantsDataProvider.pushApplicantsData();
    this.goToThankYou({});
  }
}
