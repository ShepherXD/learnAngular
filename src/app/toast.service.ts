import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toastcontroller: ToastController ) { }

  public open(text: string) {
    this.toastcontroller.create({
      message: text,
      position: 'bottom',
      duration: 1000
    }).then(it => it.present());
  }
}
