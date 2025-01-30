import { Injectable } from '@angular/core';
import {RollData} from './roll-data';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  constructor() { }

  private getRandomDiceValue(): number {
    return 1 + Math.floor( 6 * Math.random())
  }

  getRollData(numberOfDice: number): RollData {
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
}
