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
    this.http.post(
      `https://jobfairapp-edabe.firebaseio.com/applicants/DFta8h0s5ZeZKTTPIPFBYwoRJmc2.json?auth=${
        this.authProvider.idToken
      }`,
      this.applicantsData,
      this.httpOptions
    );
  }
}
