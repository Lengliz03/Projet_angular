import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  get currentPlayer(): "X" | "O" | null {
    return this.gameService.currentPlayer;
  }

  get winner(): "X" | "O" | null {
    return this.gameService.winner;
  }

  get squares(): (string | null)[] {
    return this.gameService.squares;
  }

  newGame() {
    this.gameService.newGame();
  }

  makeMove(idx: number) {
    this.gameService.makeMove(idx);
  }
}
