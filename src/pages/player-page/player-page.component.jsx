import React, { Component } from 'react';

import Header from '../../components/header/header.component.jsx';
import PlayerChoices from '../../components/player-choices/player-choices.component.jsx';

import './player-page.styles.scss';

class PlayerPage extends Component {

  constructor(props){
    super(props);

    this.player1Keys = ['a', 's', 'd'];
    this.player2Keys = ['j', 'k', 'l'];

    this.state = {
      waitingForChoice: true,
      player1Item: '',
      player2Item: '',
      results: 1, // 1: player1 won, 2: player2 won, 3: draw
      countDown: 5,
      counting: true
    }
  };

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
    this.createCoundDownInterval();
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  createCoundDownInterval = () => {
    const countDownInterval = setInterval(() => {
      if (this.state.countDown > 1) {
        this.setState({
          countDown: this.state.countDown - 1
        });
      } else {
        this.setState({
          counting: false
        });
        clearInterval(countDownInterval);
      }
    }, 1000);
  }

  handleKeyPress = event => {
    if (this.state.waitingForChoice) {
      for (const [i, char] of this.player1Keys.entries()) {
        if(event.keyCode === char.toUpperCase().charCodeAt(0)) {
          const player1Item = ['rock', 'paper', 'scissors'][i];
          this.onPlayer1Choice(player1Item);
        }
      }
  
      for (const [i, char] of this.player2Keys.entries()) {
        if(event.keyCode === char.toUpperCase().charCodeAt(0)) {
          const player2Item = ['rock', 'paper', 'scissors'][i];
          this.onPlayer2Choice(player2Item);
        }
      }
    }
  }

  onPlayer1Choice = player1Item => {
    this.setState({ player1Item }, () => {
      this.calculateResults();
    })
  }

  onPlayer2Choice = player2Item => {
    this.setState({ player2Item }, () => {
      this.calculateResults();
    })
  }

  calculateResults = () => {
    const { player1Item, player2Item } = this.state;
    if (player1Item !== '' && player2Item !== '') {
      let results = 1;
        
      if (player1Item === player2Item) {
        results = 3;
      } else if ( (player2Item === 'rock' && player1Item === 'scissors') || 
            (player2Item === 'paper' && player1Item === 'rock') ||
            (player2Item === 'scissors' && player1Item === 'paper')
      ) {
        results = 2;
      }
      
      this.setState({
        waitingForChoice: false,
        results
      });
    }
  }

  startNewGame = () => {
    this.setState({
      waitingForChoice: true,
      player1Item: '',
      player2Item: '',
      results: 1,
      countDown: 5,
      counting: true
    }, this.createCoundDownInterval());
  }

  renderCountDown = () => {
    const { countDown, counting } = this.state;
    if (counting) {
      return <div className='instructions'>{`Choose your items in... ${countDown}`}</div>;
    } else {
      return <div className='instructions'>Choose your items now!</div>;
    }
  }

  renderResults = () => {
    switch (this.state.results) {
      case 1:
        return <div className='results-value'>Player 1 won!</div>;
      case 2:
        return <div className='results-value'>Player 2 won!</div>;
      case 3:
        return <div className='results-value'>Draw!</div>;
      default:
        return '';
    }
  }

  render () {
    const { waitingForChoice, player1Item, player2Item } = this.state;

    return (
      <div className='player-page'>
        <Header />
        <div className='content'>
          <div className='title'>{`Player 1 item - use '${this.player1Keys[0]}', '${this.player1Keys[1]}' or '${this.player1Keys[2]}' keys to choose`}</div>
          <PlayerChoices handleChoice={this.onChoice} interactive={false} selected={player1Item}/>
          {
            waitingForChoice
            ? (
              <div className='countdown-container'>
                { this.renderCountDown() }
              </div>
            )
            : (
              <div className='results-container'>
                { this.renderResults() }
                <div className='new-game-button' onClick={this.startNewGame}>New Game</div>
              </div>
            )
          }
          <PlayerChoices handleChoice={() => {}} interactive={false} selected={player2Item} />
          <div className='title'>{`Player 2 item - use '${this.player2Keys[0]}', '${this.player2Keys[1]}' or '${this.player2Keys[2]}' keys to choose`}</div>
        </div>
      </div>
    )
  }
  
};

export default PlayerPage;