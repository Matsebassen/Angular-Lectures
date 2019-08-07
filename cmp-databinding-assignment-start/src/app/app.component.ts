import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers = [];
  evenNumbers = [];
  
  onNumberGenerated(nextNumber: number){
    if (nextNumber%2 === 0) {
      this.evenNumbers.push(nextNumber);
    } else {
      this.oddNumbers.push(nextNumber);
    }
  }
}
