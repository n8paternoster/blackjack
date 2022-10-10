import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../models/hand';
import { Suit, Rank} from '../models/card';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() hands!: Hand[];
  numPlayers!: number;

  constructor() { }

  ngOnInit(): void {
    this.hands = [
      new Hand([
        {suit: Suit.CLUBS, rank: Rank.EIGHT, isFaceUp: true},
        {suit: Suit.DIAMONDS, rank: Rank.KING, isFaceUp: true}], 0),
      new Hand([
        {suit: Suit.SPADES, rank: Rank.ACE, isFaceUp: true},
        {suit: Suit.SPADES, rank: Rank.TEN, isFaceUp: true}], 0),
      new Hand([
        {suit: Suit.HEARTS, rank: Rank.JACK, isFaceUp: true},
        {suit: Suit.DIAMONDS, rank: Rank.SEVEN, isFaceUp: true}], 0),
      new Hand([
        {suit: Suit.CLUBS, rank: Rank.THREE, isFaceUp: true},
        {suit: Suit.HEARTS, rank: Rank.SIX, isFaceUp: true}], 0),
    ];
  }

}
