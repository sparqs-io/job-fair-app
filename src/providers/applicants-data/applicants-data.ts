import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicantsData } from "../../models/applicantsData";
import { AuthProvider } from "../auth/auth";

/*
  Generated class for the ApplicantsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApplicantsDataProvider {
  applicantsData: ApplicantsData = {};
  httpOptions: {
    headers: HttpHeaders;
  } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(public http: HttpClient, public authProvider: AuthProvider) {
    console.log("Hello ApplicantsDataProvider Provider");
  }

  pushApplicantsData() {
    this.authProvider.refreshIdToken().subscribe(data => {
      this.authProvider.idToken = data["idToken"];
      this.http
        .post(
          `https://jobfairapp-edabe.firebaseio.com/applicants/${
            this.authProvider.localId
          }.json?auth=${this.authProvider.idToken}`,
          this.applicantsData,
          this.httpOptions
        )
        .subscribe(data => {
          console.log(data);
        });
    });
  }
}
