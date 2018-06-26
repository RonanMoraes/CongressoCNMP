
import { DaoAppProvider } from '../../providers/dao-app/dao-app';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 // providers: [DaoAppProvider] 
})
export class HomePage {

  menuItens= [
    {
      title1: "Palestras Magnas",
      image1: "../../assets/imgs/palestra.png",
      title2: "Palestra por Dia",
      image2: "../../assets/imgs/palestraPorDia.png",
      title3: "Título",
      image3: "../../assets/imgs/palestraSalas.png"
    },
    {
      title1: "Título",
      image1: "../../assets/imgs/informacoesImportantes.png",
      title2: "Título",
      image2: "../../assets/imgs/palestraPorDia.png",
      title3: "Título",
      image3: "../../assets/imgs/palestraSalas.png"    
    }
  ];

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
