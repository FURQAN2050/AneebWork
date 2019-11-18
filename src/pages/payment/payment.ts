import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(
    public alertCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  confirm(){
    let alert = this.alertCtrl.create({
      title: 'Order Confirmed',
      subTitle: 'Your order has been confirmed',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.setRoot(HomePage)
          }
        }
          ]    });
    alert.present();
  }
}
