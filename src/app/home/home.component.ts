import { Component, Input, OnInit } from '@angular/core';
import { HistoryItem } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  beginJourney = false;

  @Input() public parentData: HistoryItem[] = [{ txt: '', img: '' }];

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.beginJourney = true;
  }
}
