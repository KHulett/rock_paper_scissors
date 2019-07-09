import React, {Component} from 'react';

class Game extends Component {
  render() {
    return (
      <div className='style'>
        <div>
          <div className='player-card'></div>
          <div className='player2'></div>
        </div>
        <div>
          <div className='winner'>Winner winner chicken dinner</div>
        </div>
        <button type='button'>Click to play</button>
      </div>
    )
  }
}

export default Game;