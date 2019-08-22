import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  requestNotify(): void {
    Notification.requestPermission(() => {
      if (Notification.permission === 'denied' ) {
        alert(`不允许的话无法显示通知噢qaq \n
               请点击网址栏最左按钮设置通知为允许`);
      }
    });
  }
  notify(title: string, txt: string): void {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body: txt
      });
    } else {
      this.requestNotify();
    }
  }

  constructor() {
    this.requestNotify();
  }
}
