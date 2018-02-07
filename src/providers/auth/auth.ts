import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  refreshToken: string;
  idToken: string;
  localId: string;
  apiKey: string = "AIzaSyDqWrL-U4kZYhRwDRxE6svFEdvmreCIGgw";
  httpOptions: {
    headers: HttpHeaders;
  } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(public http: HttpClient) {
    console.log("Hello AuthProvider Provider");
  }

  authenticateUser(email, password) {
    const body = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    this.http
      .post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
          this.apiKey
        }`,
        body,
        this.httpOptions
      )
      .subscribe(data => {
        this.localId = data["localId"];
        this.idToken = data["idToken"];
        this.refreshToken = data["refreshToken"];
      });
  }

  refreshIdToken() {
    const body = {
      "grant_type": "refresh_token",
      "refresh_token": this.refreshToken
    };
    this.http.post(
      `https://securetoken.googleapis.com/v1/token?key=${this.apiKey}`,
      body,
      this.httpOptions
    ).subscribe(data => {
      this.idToken = data["idToken"];
      this.refreshToken = data["refreshToken"];
    });
  }
}
