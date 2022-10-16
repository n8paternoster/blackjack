import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../models/hand';
import { Card} from '../models/card';
import { Player } from '../models/player';
import { DealerService } from '../services/dealer.service';
import { PlayerService } from '../services/player.service';

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
  
  constructor(private dealerService: DealerService, private playerService: PlayerService) { }

  deal(): void {
    this.dealerService.payout(this.shoe, this.dealer, this.players);
    this.dealerService.shuffle(this.shoe);
    this.dealerService.deal(this.shoe, this.dealer, this.players);
    alert(this.dealerService.resolveDealerHand(this.shoe, this.dealer));
  }

  ngOnInit(): void {
    this.shoe = this.dealerService.fillShoe(4);
    this.shoe.forEach((c) => console.log(c));
    this.dealer = new Hand([], 0);

    this.players = [
      new Player("Nate", 500, []),
      new Player("Bot1", 700, []),
      new Player("Bot2", 800, []),  
    ];
  }

}
