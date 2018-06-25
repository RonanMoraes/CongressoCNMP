
import { DaoAppProvider } from '../../providers/dao-app/dao-app';


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 // providers: [DaoAppProvider] 
})
export class HomePage {

  splash = false;
  wasNotShow =true;
  //secondPage = SecondPagePage;

  constructor(public navCtrl: NavController, public daoApp: DaoAppProvider) {
   this.splash = daoApp.splashScreenShow,
   daoApp.splashScreenShow = false;
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false,  4000);
    //this.m = false;
  
  
  }
  ionViewDidEnter(){
   // this.wasNotShow = false;
  }

   
    

}
