import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EntryPagePage } from '../pages/entry-page/entry-page';
import { ApplicantsNameSurnamePage } from '../pages/applicants-name-surname/applicants-name-surname';
import { ApplicantsContactsPage } from '../pages/applicants-contacts/applicants-contacts';
import { ApplicantsAddressPage } from '../pages/applicants-address/applicants-address';
import { ApplicantsEducationPage } from '../pages/applicants-education/applicants-education';
import { ApplicantsGraduationPage } from '../pages/applicants-graduation/applicants-graduation';
import { ApplicationTypePage } from '../pages/application-type/application-type';
import { InputReviewPage } from '../pages/input-review/input-review';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { LoginScreenPage } from '../pages/login-screen/login-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    EntryPagePage,
    ApplicantsNameSurnamePage,
    ApplicantsContactsPage,
    ApplicantsAddressPage,
    ApplicantsEducationPage,
    ApplicantsGraduationPage,
    ApplicationTypePage,
    InputReviewPage,
    ThankYouPage,
    LoginScreenPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EntryPagePage,
    ApplicantsNameSurnamePage,
    ApplicantsContactsPage,
    ApplicantsAddressPage,
    ApplicantsEducationPage,
    ApplicantsGraduationPage,
    ApplicationTypePage,
    InputReviewPage,
    ThankYouPage,
    LoginScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}