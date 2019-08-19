import { Component, OnInit, Input } from '@angular/core';
import { Time } from '../home/time';
@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.scss'],
})
export class DisplayTimeComponent implements OnInit {
  @Input()showTime:Time;

  ngOnInit() {}

}
