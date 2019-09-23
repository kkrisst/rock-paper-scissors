import React, { Component } from 'react';

import Header from '../../components/header/header.component.jsx';
import PlayerChoices from '../../components/player-choices/player-choices.component.jsx';

import './cpu-page.styles.scss';

class CPUPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      waitingForChoice: true,
      playerItem: '',
      cpuItem: '',
      results: 1 // 1: player won, 2: cpu won, 3: draw
    }
  };

  onChoice = playerItem => {
    if (this.state.waitingForChoice) {
      const cpuItem = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
      this.calculateResults(playerItem, cpuItem);
    }
  }

  calculateResults = (playerItem, cpuItem) => {
    let results = 1;
      
    if (playerItem === cpuItem) {
      results = 3;
    } else if ( (cpuItem === 'rock' && playerItem === 'scissors') || 
          (cpuItem === 'paper' && playerItem === 'rock') ||
          (cpuItem === 'scissors' && playerItem === 'paper')
    ) {
      results = 2;
    }
    
    this.setState({
      waitingForChoice: false,
      playerItem,
      cpuItem,
      results
    });
  }

  startNewGame = () => {
    this.setState({
      waitingForChoice: true,
      playerItem: '',
      cpuItem: '',
      results: 1
    });
  }

  renderResults = () => {
    switch (this.state.results) {
      case 1:
        return <div className='results-value'>You won!</div>;
      case 2:
        return <div className='results-value'>You lost!</div>;
      case 3:
        return <div className='results-value'>Draw!</div>;
      default:
        return '';
    }
  }

  render () {
    const { waitingForChoice, playerItem, cpuItem } = this.state;

    return (
      <div className='cpu-page'>
        <Header />
        <div className='content'>
          <div className='title'>Player item</div>
          <PlayerChoices
            handleChoice={this.onChoice}
            interactive={waitingForChoice}
            selected={playerItem}
            showSelected={true} />
          {
            waitingForChoice
            ? (<div className='instructions'>Choose your item to see the results!</div>)
            : (
              <div className='results-container'>
                { this.renderResults() }
                <div className='new-game-button' onClick={this.startNewGame}>New Game</div>
              </div>
            )
          }
          <PlayerChoices
            handleChoice={() => ''}
            interactive={false}
            selected={cpuItem}
            showSelected={true} />
          <div className='title'>CPU item</div>
        </div>
      </div>
    )
  }
  
};

export default CPUPage;