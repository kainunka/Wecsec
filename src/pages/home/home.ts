import { Component} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { PersonPage } from '../person/person';
import { ViewVideoPage } from '../view-video/view-video';
import { ViewAllPage } from '../view-all/view-all';


import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Storage } from '@ionic/storage';
import "rxjs/add/operator/map";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: FirebaseListObservable<any>;
  local: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, angFire: AngularFire) {



      console.log(this.items);
      console.log("test");

      this.local = new Storage();
      this.local.set('name', 'golf');

      this.local.get('name').then((data) => {
        this.items = angFire.database.list('/' + data + '/personal').map((array) => array.reverse()) as FirebaseListObservable<any[]>;
      });

      this.local.get('uid').then((data) => {
        console.log("UID = " + data);
      })

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  viewVideo() {
    this.navCtrl.push(ViewVideoPage);
  }

  viewAll() {
    this.navCtrl.push(ViewAllPage);
  }


  addPer() {
    this.navCtrl.push(PersonPage);
  }


  fav() {

  }


}
