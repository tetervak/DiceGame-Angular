import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgOptimizedImage} from '@angular/common';
import {RollData} from './roll-data';
import {FormsModule} from '@angular/forms';
import {DiceDisplayComponent} from './dice-display/dice-display.component';
import {DiceRollerService} from './dice-roller.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    FormsModule,
    DiceDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rollData: RollData | undefined;
  numberOfDice: number = 3;

  //private service: DiceRollerService;
  constructor(private service: DiceRollerService) {
    //this.service = service;
  }

  onRoll(): void {
    this.rollData = this.service.getRollData(this.numberOfDice);
  }
}
