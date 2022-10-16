export enum Suit {  // class names 
    HEARTS = "heart",
    DIAMONDS = "diamond",
    SPADES = "spade",
    CLUBS = "club"
}

export enum Rank {  // symbols to display
    ACE = "A",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5", 
    SIX = "6", 
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "J",
    QUEEN = "Q",
    KING = "K"
}

export class Card {
    suit: Suit;
    rank: Rank;
    isFaceUp: boolean;
    
    constructor(suit: Suit, rank: Rank, isFaceUp: boolean) {
        this.suit = suit;
        this.rank = rank;
        this.isFaceUp = isFaceUp;
    }
}