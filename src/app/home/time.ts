
export class Time {
  //用于表示时间段比较合适 表示时刻时可以直接用Date
  private _timeStamp: number; //秒为精度

  constructor(sec: number = 0, min: number = 0, hour: number = 0) {
    this._timeStamp = sec + this.minToSec(min) + this.hourToSeconds(hour);
  }

  static getTimeDiff(from: Date, to: Date): Time {
    return new Time(Math.abs(from.getTime() - to.getTime()));
  }

  //通过clone可以保证Time的不可变性
  public clone(diff?: { sec?: number; min?: number; hour?: number }): Time {
    //需要你自己实现 这个是难点 实现复制并更新新时间的描述 例如:
    /*
        let time = new Time(0,1,0);
        let newTime = time.clone({
            sec:-1
        });
         */
    //不仅逻辑麻烦 而且还需要考验你对于可空类型的判断
    return new Time();
  }

  public change(diff?: { sec?: number; min?: number; hour?: number }): Time {
    //更改自身的时间
    if (this._timeStamp){
      this._timeStamp = this._timeStamp + diff.sec;
    }
    return this; //方便链式调用
  }
  get timeStamp(): number {
    return this._timeStamp;
  }

  get hour(): number {
    //需要你自己实现
    return Math.floor(this._timeStamp / 3600); //想了很久->感觉用min和sec很绕
  }

  get min(): number {
    return ((this._timeStamp - this.sec) / 60) % 60; //从秒数转为分钟数 并扣除多出来的小时数
  }

  get sec(): number {
    return this._timeStamp % 60; //扣完小时和分钟数之后的秒数
  }

  private minToSec(minutes: number): number {
    //需要你自己实现
    return minutes * 60;
  }

  private hourToSeconds(hours: number): number {
    return this.minToSec(hours * 60);
  }

  set timeStamp(value: number) {
    this._timeStamp = value;
  }

  /* 选做题 实现setter
        set hour(value: number) {
        }

        set min(value: number) {
        }

        set sec(value: number) {
        }
     */
}
