import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: NodeJS.Timeout;
  @Output() numberIncremented = new EventEmitter<{newNumber: number}>();
  currentNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  StartGame() {    
    this.interval = setInterval(() => {
      this.currentNumber++;
      this.numberIncremented.emit({newNumber: this.currentNumber});    
      console.log(this.currentNumber);
    }, 1000);
  }

}
