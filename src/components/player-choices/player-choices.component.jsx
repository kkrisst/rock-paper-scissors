import React from 'react';

import { ReactComponent as Rock } from '../../assets/rock2.svg';
import { ReactComponent as Paper } from '../../assets/paper2.svg';
import { ReactComponent as Scissors } from '../../assets/scissors1.svg';

import './player-choices.styles.scss';

const PlayerChoices = ({ handleChoice, interactive, selected }) => {
  return (
    <div className={`player-choices ${interactive ? 'interactive' : ''}`}>
      <Rock className={`choice ${selected === 'rock' ? 'selected' : ''}`} onClick={() => handleChoice('rock')} />
      <Paper className={`choice ${selected === 'paper' ? 'selected' : ''}`} onClick={() => handleChoice('paper')} />
      <Scissors className={`choice ${selected === 'scissors' ? 'selected' : ''}`} onClick={() => handleChoice('scissors')} />
    </div>
  )
};

export default PlayerChoices;