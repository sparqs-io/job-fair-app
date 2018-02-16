import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
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
import { ApplicantsPhotoPage } from '../pages/applicants-photo/applicants-photo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ApplicantsDataProvider } from '../providers/applicants-data/applicants-data';

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
    LoginScreenPage,
    ApplicantsPhotoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
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
    LoginScreenPage,
    ApplicantsPhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApplicantsDataProvider
  ]
})
export class AppModule {}