import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DaoAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DaoAppProvider { 

  private _splashScreenShow = true;
  public get splashScreenShow() {
    return this._splashScreenShow;
  }
  public set splashScreenShow(value) {
    this._splashScreenShow = value;
  }

  constructor(public http: HttpClient) {
    console.log('Hello DaoAppProvider Provider');
  }


}
