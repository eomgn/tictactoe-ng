import { Component } from '@angular/core';

@Component({
  selector: 'tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  title:string = 'Jogo da velha'

  player:string = 'X'

  winner:string = ''

  board: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ]

 clickeding:boolean= false

actualPlayer(){
  this.player == 'X' ? this.player = 'O' : this.player = 'X'
}


insertMove(row:number, col:number){

  if(this.board[row][col] == '' && this.winner == ''){
    this.board[row][col] = this.player
  }
  
  if(this.checkedWinner(this.player)) {
    this.winner = this.player
  }
  
  this.actualPlayer()
}

reset() {
  this.player = 'X'

  this.winner = ''

  this.board = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
}

checkedWinner(playerWinner:string):boolean {

  for(let i = 0;i < this.board.length; i++) {
    if(this.board[i][0] == playerWinner && this.board[i][1] == playerWinner && this.board[i][2] == playerWinner) {
      return true
    }
  }

  for(let i = 0;i < this.board.length; i++) {
    if(this.board[0][i] == playerWinner && this.board[1][i] == playerWinner && this.board[2][i] == playerWinner) {
      return true
    }
  }

  if(this.board[0][0] == playerWinner && this.board[1][1] == playerWinner && this.board[2][2] == playerWinner) {
    return true
  }

  if(this.board[0][2] == playerWinner && this.board[1][1] == playerWinner && this.board[2][0] == playerWinner) {
    return true
  }
  
  return false
}

}
