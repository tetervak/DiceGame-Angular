import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-dice-display',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './dice-display.component.html',
  styleUrl: './dice-display.component.css'
})
export class DiceDisplayComponent {

  @Input() diceValues: number[] = [];

  imageSrc(value: number): string {
    return `images/dice/side_${value}.png`;
  }
}
