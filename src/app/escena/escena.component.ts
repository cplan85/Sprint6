import { Component, Input, OnInit } from '@angular/core';
import { HistoryItem } from '../interfaces';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent implements OnInit {
  currentSentence = 0;

  @Input() public parentData: HistoryItem[] = [{ txt: '', img: '' }];
  constructor() {}

  ngOnInit(): void {
    console.log(this.parentData);
  }

  next() {
    if (this.currentSentence < this.parentData.length - 1) {
      this.currentSentence += 1;
    } else {
      this.currentSentence = 0;
    }
    console.log(this.currentSentence);
  }
  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence -= 1;
    } else {
      this.currentSentence = this.parentData.length - 1;
    }
  }
}
