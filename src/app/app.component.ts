import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgOptimizedImage} from '@angular/common';
import {RollData} from './roll-data';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rollData: RollData | undefined;

  private getRandomDiceValue(): number {
    return 1 + Math.floor( 6 * Math.random())
  }

  private getRollData(numberOfDice: number): RollData {
    const values: number[] = [];
    let total: number = 0;
    for(let i = 0; i < numberOfDice; i++){
      let diceValue: number = this.getRandomDiceValue();
      total += diceValue;
      values.push(diceValue);
    }

    return {
      numberOfDice: numberOfDice,
      values: values,
      total: total
    }
  }

  onRoll(): void {
    this.rollData = this.getRollData(3);
  }

  imageSrc(value: number): string {
    return `images/dice/side_${value}.png`;
  }
}
