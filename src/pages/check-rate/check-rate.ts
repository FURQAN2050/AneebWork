import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmOrderPage } from '../confirm-order/confirm-order';
 
/**
 * Generated class for the CheckRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-rate',
  templateUrl: 'check-rate.html',
})
export class CheckRatePage {
  bar:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bar='Small';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckRatePage');
  }
  next(){
    this.navCtrl.push('ConfirmOrderPage')
  }
  change(value){
    this.bar=value;
  }
}
