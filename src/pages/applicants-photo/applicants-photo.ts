import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";

import { InputReviewPage } from "../input-review/input-review";
import { ApplicantsDataProvider } from "../../providers/applicants-data/applicants-data";
import { toBase64String } from "@angular/compiler/src/output/source_map";
/**
 * Generated class for the ApplicantsPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-applicants-photo",
  templateUrl: "applicants-photo.html"
})
export class ApplicantsPhotoPage {
  public photos: any;
  public base64Image: string;
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private alertCtrl: AlertController,
    public applicantsDataProvider: ApplicantsDataProvider
  ) {}

  goToInputReview(params) {
    if (!params) params = {};
    this.navCtrl.push(InputReviewPage);
  }

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: "Bist du sicher, dass du dieses Foto löschen möchtest?",
      message: "",
      buttons: [
        {
          text: "Nein",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Ja",
          handler: () => {
            console.log("Agree clicked");
            this.photos.splice(index, 1);
            this.applicantsDataProvider.applicantsData.applicantsPhoto = "";
          }
        }
      ]
    });
    confirm.present();
  }

 
  takePhoto() {
  
    const options: CameraOptions = {
      quality: 70, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 150,
      cameraDirection: 0
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        this.applicantsDataProvider.applicantsData.applicantsPhoto = this.base64Image;
        //console.log("Your photo in brilliant UHD base64" + this.applicantsDataProvider.applicantsData.applicantsPhoto);
      },
      err => {
        console.log(err);
      }
    );
  
  }
}
