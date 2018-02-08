import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ThankYouPage } from "../thank-you/thank-you";
import { ApplicantsDataProvider } from "../../providers/applicants-data/applicants-data";
import { AuthProvider } from "../../providers/auth/auth";
import { ApplicantsNameSurnamePage } from "../applicants-name-surname/applicants-name-surname";

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
    applicantsDataProvider.applicantsData.applicationType;
  }
  goToThankYou(params) {
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }
  saveApplicantsData() {
    this.applicantsDataProvider.pushApplicantsData(() => {
      this.goToThankYou({});
    });
  }
  goToApplicantsNameSurname(params) {
    if (!params) params = {};
    this.navCtrl.push(
      ApplicantsNameSurnamePage,
      {},
      { animate: true, direction: "forward" }
    );
  }
}
