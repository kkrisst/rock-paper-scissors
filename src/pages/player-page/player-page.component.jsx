import React, { Component } from 'react';

import PlayerChoices from '../../components/player-choices/player-choices.component.jsx';

import './player-page.styles.scss';

class PlayerPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      waitingForChoice: true,
      player1Item: '',
      player2Item: '',
      results: 1 // 1: player1 won, 2: player2 won, 3: draw
    }
  };

  onChoice = () => {
    
  }

  startNewGame = () => {
    this.setState({
      waitingForChoice: true,
      player1Item: '',
      player2Item: '',
      results: 1
    });
  }

  render () {
    const { waitingForChoice, player1Item, player2Item } = this.state;

    return (
      <div className='player-page'>
        <div className='title'>Player 1 item</div>
        <PlayerChoices handleChoice={this.onChoice} interactive={waitingForChoice} selected={player1Item}/>
        <div className='instructions'>Choose your items!</div>
        <PlayerChoices handleChoice={() => {}} interactive={waitingForChoice} selected={player2Item} />
        <div className='title'>Player 2 item</div>
      </div>
    )
  }
  
};

export default PlayerPage;