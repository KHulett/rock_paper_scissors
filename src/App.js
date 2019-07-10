import React, {Component} from 'react';
import PlayerCard from './PlayerCard'

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
    }
  }

  playGame = () => {
    // this is where we are going to create the functionality to play the game
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    })
  }

  decideWinner= () => {
    if (this.state.playerOne === this.state.playerTwo){
      return 'tie'
    }
    else if ((this.state.playerOne === 'rock' && this.state.playerTwo === 'scissors') || 
    (this.state.playerOne === 'scissors' && this.state.playerTwo === 'paper') ||
    (this.state.playerOne === 'paper' && this.state.playerTwo === 'rock')){
      
      return 'playerOne Wins!'
    }
    else {
      return "playerTwo Wins!"
    }
  }

  render() {
    return (
      <div className='style'>
        <div>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className='winner'>{this.decideWinner()}></div>
        <button type='button' onClick={this.playGame}>Click to play</button>
      </div>
    )
  }
}

export default Game;