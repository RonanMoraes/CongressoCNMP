
import { DaoAppProvider } from '../../providers/dao-app/dao-app';

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 // providers: [DaoAppProvider] 
})
export class HomePage {

  @ViewChild('button1') bt : ElementRef;

  menssagemClick = "nada foi clicado ainda";

  menuItens= [
    {
      title1: "Palestras Magnas",
      image1: "../../assets/imgs/palestra.png",
      page1: "PalestraMagnaPage",
      title2: "Palestra por Dia",      
      image2: "../../assets/imgs/palestraPorDia.png",
      page2: "ListPage",
      title3: "Título",
      image3: "../../assets/imgs/palestraSalas.png",
      page3: "PalestraMagnaPage"
    },
    {
      title1: "Título",
      image1: "../../assets/imgs/informacoesImportantes.png",
      page1: "ListPage",
      title2: "Título",
      image2: "../../assets/imgs/palestraPorDia.png",
      page2: "ListPage",
      title3: "Título",
      image3: "../../assets/imgs/palestraSalas.png",
      page3: "ListPage"    
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
  changeMenssage(itemClick){
      //this.menssagemClick = "foi clicado "+itemClick;
    
      this.navCtrl.push(itemClick);
      this.bt.nativeElement.style.background = '#ffffff';

  }

  itemFocus(item) {
    
   
      this.bt.nativeElement.style.background = ' #e2e2e2'; 



  } 
    

}
