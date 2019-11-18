import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckRatePage } from '../check-rate/check-rate';

/**
 * Generated class for the SelectLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-location',
  templateUrl: 'select-location.html',
})
export class SelectLocationPage {
  selected:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLocationPage');
  }
  change(value){
this.selected=value
  }
  next(){
    this.navCtrl.push('CheckRatePage')
  }
  back(){
    this.navCtrl.pop()
  }
}
