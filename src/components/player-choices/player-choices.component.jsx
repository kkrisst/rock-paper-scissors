import React from 'react';

import { ReactComponent as Rock } from '../../assets/rock.svg';
import { ReactComponent as Paper } from '../../assets/paper.svg';
import { ReactComponent as Scissors } from '../../assets/scissors.svg';

import './player-choices.styles.scss';

const PlayerChoices = ({ handleChoice, interactive, selected, showSelected }) => {
  return (
    <div className={`player-choices ${interactive ? 'interactive' : ''}`}>
      <Rock
        className={`choice ${ (selected === 'rock' &&  showSelected) ? 'selected' : ''}`}
        onClick={() => handleChoice('rock')}
      />
      <Paper
        className={`choice ${ (selected === 'paper' &&  showSelected) ? 'selected' : ''}`}
        onClick={() => handleChoice('paper')}
      />
      <Scissors
        className={`choice ${ (selected === 'scissors' &&  showSelected) ? 'selected' : ''}`}
        onClick={() => handleChoice('scissors')}
      />
    </div>
  )
};

export default PlayerChoices;