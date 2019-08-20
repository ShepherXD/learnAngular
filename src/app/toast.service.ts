import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toastController: ToastController ) { }

  public open(text: string) {
    this.toastController.create({
      message: text,
      position: 'top',
      duration: 1000
    }).then(it => it.present());
  }
}
