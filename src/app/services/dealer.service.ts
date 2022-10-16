import { Injectable } from '@angular/core';
import { Card, Rank, Suit } from '../models/card';
import { Hand } from '../models/hand';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor() { }

  fillShoe(numDecks: number): Card[] {
    let suits = [Suit.CLUBS, Suit.DIAMONDS, Suit.HEARTS, Suit.SPADES];
    let shoe: Card[] = [];
    for (let i = 0; i < numDecks; i++) {
      for (let j = 0; j < suits.length; j++) {
        shoe.push({suit: suits[j], rank: Rank.ACE, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.TWO, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.THREE, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.FOUR, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.FIVE, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.SIX, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.SEVEN, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.EIGHT, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.NINE, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.TEN, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.JACK, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.QUEEN, isFaceUp: false});
        shoe.push({suit: suits[j], rank: Rank.KING, isFaceUp: false});
      }
    }
    return shoe;
  }

  shuffle(shoe: Card[]): void {
    // Fisher-Yates shuffle
    for (let i = shoe.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shoe[i], shoe[j]] = [shoe[j], shoe[i]];
    }
  }

  /**
   * Transfer cards from the shoe to the dealer and players
   */
  deal(shoe: Card[], dealer: Hand, players: Player[]): void {
    if (shoe.length < 2*(1+players.length)) {
      console.error("Shoe does not have enough cards to deal");
      return;
    }
    let cardOne = shoe.pop()!;
    let cardTwo = shoe.pop()!;
    cardOne.isFaceUp = false;
    cardTwo.isFaceUp = true;
    dealer.cards = [cardOne, cardTwo];
    players.forEach(p => {
      cardOne = shoe.pop()!;
      cardTwo = shoe.pop()!;
      cardOne.isFaceUp = false;
      cardTwo.isFaceUp = true;
      p.hands = [];
      p.hands.push(new Hand([cardOne, cardTwo], 0));
    });
  }

  /**
   * Transfer cards from the dealer and players to the shoe
   */
  payout(shoe: Card[], dealer: Hand, players: Player[]): void {

    // TODO: Add object or field for bid amounts and handle bet payouts

    while (dealer.cards.length > 0) {
      let card = dealer.cards.pop()!;
      card.isFaceUp = false;
      shoe.push(card);
    }
    players.forEach(p => {
      while (p.hands.length > 0) {
        let hand = p.hands.pop()!;
        while (hand.cards.length > 0) {
          let card = hand.cards.pop()!;
          card.isFaceUp = false;
          shoe.push(card);
        }
      }
    });
  }

  resolveDealerHand(shoe: Card[], dealer: Hand): number {
    let isSoft = false;
    dealer.value = 0;
    dealer.cards.forEach(c => {
      c.isFaceUp = true;
      switch (c.rank) {
        case Rank.ACE:
          if (dealer.value + 11 > 21) {
            dealer.value += 1;
          } else {
            dealer.value += 11;
            isSoft = true;
          }
          break;
        case Rank.JACK:
        case Rank.QUEEN:
        case Rank.KING:
          dealer.value += 10;
          break;
        default:
          dealer.value += parseInt(c.rank);
      }
    });
    while (dealer.value < 17 || (dealer.value == 17 && isSoft)) {
      let hit = shoe.pop()!;
      hit.isFaceUp = true;
      dealer.cards.push(hit);
      switch (hit.rank) {
        case Rank.ACE:
          if (dealer.value + 11 > 21) {
            dealer.value += 1;
          } else {
            dealer.value += 11;
            isSoft = true;
          }
          break;
        case Rank.JACK:
        case Rank.QUEEN:
        case Rank.KING:
          dealer.value += 10;
          break;
        default:
          dealer.value += parseInt(hit.rank);
      }
      if (dealer.value > 21 && isSoft) {
        dealer.value -= 10;
        isSoft = false;
      }
    }
    return dealer.value;
  }
}
