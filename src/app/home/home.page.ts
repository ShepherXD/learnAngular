import { Component } from '@angular/core';
import { Time } from './time';
import { notify } from '../notification';
import { ToastService } from '../toast.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})

export class HomePage {
    currSan: number; // 当前理智
    maxSan: number; // 最大理智
    remainTime: Time; // 剩余时间
    timer: number;

    constructor( private toastService: ToastService) { }

    verify() {
        if ( this.maxSan % 1 !== 0 || this.currSan % 1 !== 0  ) {
            this.toastService.open('输整数啦！！><');
        } else if ( this.maxSan > 200 || this.currSan > 200 ) {
            this.toastService.open('刀客塔怎么可能有那么多理智 ><');
        } else if ( this.maxSan < 1 || this.currSan < 0) {
            this.toastService.open('请问你就是我的失智刀客塔吗 0.0');
        } else {
            this.setTime();
        }
    }

    setTime() {
        this.timer && clearInterval(this.timer);
        this.remainTime = new Time(0, 6 * (this.maxSan - this.currSan));
        this.timeChange();
        this.timer = setInterval(this.timeChange, 1000);

    }

    timeChange = () => {
        this.remainTime.change({
            sec: -1
        });
        if (this.remainTime.timeStamp <= 0) {
            notify();
            clearInterval(this.timer);
        }
    }


}
