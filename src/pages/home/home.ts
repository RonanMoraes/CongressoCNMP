
import { DaoAppProvider } from '../../providers/dao-app/dao-app';

import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 // providers: [DaoAppProvider] 
})
export class HomePage {

 

  menssagemClick = "nada foi clicado ainda";

  menuItens= [
    {
      title1: "Palestras Magnas",
      image1: "../../assets/imgs/PalestraMagna.png",
      page1: "PalestraMagnaPage",
      title2: "Programação por Sala",      
      image2: "../../assets/imgs/PalestraPorSala.png",
      page2: "PalestraMagnaPage",
      title3: "Programação por Dia",
      image3: "../../assets/imgs/PalestraPorDia.png",
      page3: "PalestraMagnaPage"
    },
    {
      title1: "Informações Importante",
      image1: "../../assets/imgs/informacoesImportantes.png",
      page1: "PalestraMagnaPage",
      title2: "Carta do Presidente",
      image2: "../../assets/imgs/CartaPresidente.png",
      page2: "PalestraMagnaPage",
      title3: "Localização",
      image3: "../../assets/imgs/Localização.png",
      page3: "PalestraMagnaPage"    
    },
    {
      title1: "Redes Sociais",
      image1: "../../assets/imgs/RedesSociais.png",
      page1: "PalestraMagnaPage",
      title2: "Contato",
      image2: "../../assets/imgs/Contato.png",
      page2: "PalestraMagnaPage",
      title3: "Avaliação do Congresso",
      image3: "../../assets/imgs/Avaliação.png",
      page3: "PalestraMagnaPage"    
    }
  ];

  splash = false;
  wasNotShow =true; // mudar para true para spalshscreen aparecer
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
    

  }

 
    

}
