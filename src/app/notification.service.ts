import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  requestNotify(): void {
    Notification.requestPermission(permission => {
    });
  }

  notify(title: string, txt: string): void {
    const notification = new Notification(title, {
      body: txt
    });
  }

  constructor() {
  }
}
