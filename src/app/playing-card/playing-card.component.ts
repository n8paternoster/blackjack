import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card, Suit, Rank } from '../models/card';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent implements OnInit {

  @Input() cardInfo!: Card;
  readonly Rank = Rank;

  constructor() { }

  ngOnInit(): void {

  }

}
