import { Card } from "./card";

export class Hand {
    cards: Card[];
    value: number;

    constructor(cards: Card[], value: number) {
        this.cards = cards;
        this.value = value;
    }
}