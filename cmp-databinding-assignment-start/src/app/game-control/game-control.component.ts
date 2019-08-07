import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalRef;
  counter: number = 0;
  @Output() newNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  StartGame(){
    this.intervalRef = setInterval(() => {
      this.newNumber.emit(this.counter);
      this.counter++;  
    }, 1000);
  }

  StopGame() {
    clearInterval(this.intervalRef);
  }

}
