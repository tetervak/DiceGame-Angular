import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isRolled:boolean = false;
  numberOfDice:number = 3;
  total: number = 0;
  diceValues: number[] = [1,1,1];

  roll() {
    let sum: number = 0;
    for(let ind= 0; ind < this.numberOfDice; ind++){
      let value: number = Math.floor(6*Math.random()) + 1;
      sum += value;
      this.diceValues[ind] = value;
    }
    this.total = sum;
    this.isRolled = true;
  }

  onChange(selection: string) {
    let num = parseInt(selection)
    this.diceValues = []
    for(let ind = 0; ind < num; ind++){
      this.diceValues.push(1)
    }
    this.numberOfDice = num;
    this.roll()
  }
}
