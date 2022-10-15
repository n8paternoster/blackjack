import { Hand } from "./hand";

export class Player {
    name: String;
    chips: number;
    hands: Hand[];

    constructor(name: String, chips: number, hands: Hand[]) {
        this.name = name;
        this.chips = chips;
        this.hands = hands;
    }
}