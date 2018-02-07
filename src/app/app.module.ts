import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ThankYouPage
  ],
  imports: [
    BrowserModule,
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
    ThankYouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}