import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { InputReviewPage } from "../input-review/input-review";
import { ThankYouPage } from "../thank-you/thank-you";
import { ApplicantsPhotoPage} from "../applicants-photo/applicants-photo";

import { ApplicantsDataProvider } from "../../providers/applicants-data/applicants-data";

@Component({
  selector: "page-application-type",
  templateUrl: "application-type.html"
})
export class ApplicationTypePage {
  constructor(
    public navCtrl: NavController,
    public applicantsDataProvider: ApplicantsDataProvider
  ) {}
  goToInputReview(params) {
    if (!params) params = {};
    this.navCtrl.push(InputReviewPage);
  }
  goToThankYou(params) {
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }
  goToApplicantsPhotoPage(params) {
    if (!params) params = {};
    this.navCtrl.push(ApplicantsPhotoPage);
  }
  isNotEmpty() {
    return !(
      this.applicantsDataProvider.applicantsData.applicationType
    );
  }
}
