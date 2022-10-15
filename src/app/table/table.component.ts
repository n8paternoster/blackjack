import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../models/hand';
import { Suit, Rank, Card} from '../models/card';
import { Player } from '../models/player';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() players!: Player[];
  dealer!: Hand;
  shoe!: Card[];

  get allHands(): Hand[] {
    return this.players.flatMap((p) => p.hands);
  }

  playerPosition(p: number): number {
    let startPos = 1;
    for (let i = 0; i < p; i++)
      startPos += this.players[i].hands.length;
    let endPos = startPos + (this.players[p].hands.length-1);
    return startPos+endPos;
  }
  
  constructor() { }

  ngOnInit(): void {
    let suits = [Suit.CLUBS, Suit.DIAMONDS, Suit.HEARTS, Suit.SPADES];
    let numDecks = 1;
    this.shoe = [];
    for (let i = 0; i < numDecks; i++) {
      for (let j = 0; j < suits.length; j++) {
        this.shoe.push({suit: suits[j], rank: Rank.ACE, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.TWO, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.THREE, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.FOUR, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.FIVE, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.SIX, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.SEVEN, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.EIGHT, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.NINE, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.TEN, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.JACK, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.QUEEN, isFaceUp: true});
        this.shoe.push({suit: suits[j], rank: Rank.KING, isFaceUp: true});
      }
    }
    this.shoe.forEach((c) => console.log(c));


    this.dealer = new Hand([
      {suit: Suit.SPADES, rank: Rank.NINE, isFaceUp: true},
      {suit: Suit.HEARTS, rank: Rank.TWO, isFaceUp: true}
    ], 0);
    this.players = [
      new Player(
        "Nate",
        500,
        [
          new Hand([
            {suit: Suit.CLUBS, rank: Rank.EIGHT, isFaceUp: true},
            {suit: Suit.DIAMONDS, rank: Rank.KING, isFaceUp: true}], 0)
        ]),
      new Player(
        "Bot1",
        700,
        [
          new Hand([
            {suit: Suit.SPADES, rank: Rank.TEN, isFaceUp: true},
            {suit: Suit.SPADES, rank: Rank.JACK, isFaceUp: true}], 0),
          new Hand([
            {suit: Suit.CLUBS, rank: Rank.THREE, isFaceUp: true},
            {suit: Suit.HEARTS, rank: Rank.SIX, isFaceUp: true}], 0)
        ]),
      new Player(
        "Bot2",
        800,
        [
          new Hand([
            {suit: Suit.HEARTS, rank: Rank.JACK, isFaceUp: true},
            {suit: Suit.DIAMONDS, rank: Rank.SEVEN, isFaceUp: true}], 0),
          new Hand([
            {suit: Suit.CLUBS, rank: Rank.NINE, isFaceUp: true},
            {suit: Suit.HEARTS, rank: Rank.JACK, isFaceUp: true}], 0)
        ]),  
    ];
  }

}
