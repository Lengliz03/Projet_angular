import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  squares: (string | null)[] = Array(9).fill(null); // Board state
  xIsNext: boolean = true; // Track the current player
  winner: "X" | "O" | null = null; // Explicitly define winner type as "X" | "O" | null

  constructor() {
    this.newGame();
  }

  // Initializes a new game
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  // Get the current player ('X' or 'O') using the getter
  get currentPlayer(): "X" | "O" | null {
    return this.xIsNext ? "X" : "O";
  }

  // Handle a player's move
  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.currentPlayer;
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  // Calculate the winner
  private calculateWinner(): "X" | "O" | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a] as "X" | "O";  // Ensure type consistency
      }
    }
    return null;
  }
}
