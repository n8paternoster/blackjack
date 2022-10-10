import { Component, Input, OnInit } from '@angular/core';
import { Suit, Rank } from '../models/card';
import { Hand } from '../models/hand';

@Component({
  selector: 'app-blackjack-hand',
  templateUrl: './blackjack-hand.component.html',
  styleUrls: ['./blackjack-hand.component.css']
})
export class BlackjackHandComponent implements OnInit {

  @Input() handInfo!: Hand;

  constructor() { }

  flipCardN(n: number): void {
    console.log("Flipping " + n);
    this.handInfo.cards[n].isFaceUp = !this.handInfo.cards[n].isFaceUp;
  }

  ngOnInit(): void {
    // let suit = Suit.DIAMONDS;
    // let cards = [
    //   {
    //     suit: suit,
    //     rank: Rank.ACE,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.TWO,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.THREE,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.FOUR,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.FIVE,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.SIX,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.SEVEN,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.EIGHT,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.NINE,
    //     isFaceUp: true 
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.TEN,
    //     isFaceUp: true
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.JACK,
    //     isFaceUp: true
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.QUEEN,
    //     isFaceUp: true
    //   },
    //   {
    //     suit:suit,
    //     rank: Rank.KING,
    //     isFaceUp: true
    //   }
    // ];
    // this.hand = new Hand(cards, 0);
  }

}
