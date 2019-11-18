import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ConfirmOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-order',
  templateUrl: 'confirm-order.html',
})
export class ConfirmOrderPage {
  @ViewChild('myInput') myInput: ElementRef;

  constructor(

    public navCtrl: NavController, public navParams: NavParams) {
  }
  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmOrderPage');
  }
  next(){
    this.navCtrl.push('PaymentPage')

  }

}
