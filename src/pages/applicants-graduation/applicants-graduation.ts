import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ApplicationTypePage } from "../application-type/application-type";
import { InputReviewPage } from "../input-review/input-review";
import { ThankYouPage } from "../thank-you/thank-you";
import { ApplicantsDataProvider } from "../../providers/applicants-data/applicants-data";

@Component({
  selector: "page-applicants-graduation",
  templateUrl: "applicants-graduation.html"
})
export class ApplicantsGraduationPage {
  constructor(
    public navCtrl: NavController,
    public applicantsDataProvider: ApplicantsDataProvider
  ) {}
  goToApplicationType(params) {
    if (!params) params = {};
    this.navCtrl.push(ApplicationTypePage);
  }
  goToInputReview(params) {
    if (!params) params = {};
    this.navCtrl.push(InputReviewPage);
  }
  goToThankYou(params) {
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }

  isNotEmpty() {
    return !(
      this.applicantsDataProvider.applicantsData.applicantsGraduationDate
    );
  }
}
