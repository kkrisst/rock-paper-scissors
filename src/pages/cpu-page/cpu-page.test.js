import React from 'react'
import { shallow } from 'enzyme'

import CPUPage from './cpu-page.component.jsx'

describe('Testing the CPUPage component', () => {

  const wrapperWaiting = shallow(<CPUPage />);
  wrapperWaiting.setState({
    waitingForChoice: true
  })

  const wrapperDone = shallow(<CPUPage />);
  wrapperDone.setState({
    waitingForChoice: false
  })

  it('expect CPUPage to be defined', () => {
    expect(CPUPage).toBeDefined();
  });

  it('expect CPUPage to match snapshot', () => {
    expect(wrapperWaiting).toMatchSnapshot();
  });

  it('expect CPUPage to have 2 Player choices', () => {
    const playerChoices = wrapperWaiting.find('PlayerChoices');
    expect(playerChoices.length).toEqual(2);
  });

  it('expect CPUPage to only display instructions when it is waiting for a choice', () => {
    const results = wrapperWaiting.find('.results-container');
    expect(results.length).toEqual(0);
    const instructions = wrapperWaiting.find('.instructions');
    expect(instructions.length).toEqual(1);
  });

  it('expect CPUPage to display results when it is not waiting for a choice', () => {
    const results = wrapperDone.find('.results-container');
    expect(results.length).toEqual(1);
  });

  it('expect CPUPage to display a new game button when it is not waiting for a choice',  () => {
    const newGameButton = wrapperDone.find('.new-game-button');
    expect(newGameButton.length).toEqual(1);
  });

  it('expect CPUPage to display a new game button when it is not waiting for a choice',  () => {
    const newGameButton = wrapperDone.find('.new-game-button');
    expect(newGameButton.length).toEqual(1);
  });

  it('expect CPUPage to calculate victory when the player should win', () => {
    wrapperWaiting.instance().calculateResults('rock', 'scissors');
    wrapperWaiting.update();
    const state = wrapperWaiting.instance().state;
    expect(state.results).toEqual(1);
  });

  it('expect CPUPage to calculate loss when the player should loose', () => {
    wrapperWaiting.instance().calculateResults('paper', 'scissors');
    wrapperWaiting.update();
    const state = wrapperWaiting.instance().state;
    expect(state.results).toEqual(2);
  });

  it('expect CPUPage to calculate draw when the correct outcome is draw', () => {
    wrapperWaiting.instance().calculateResults('paper', 'paper');
    wrapperWaiting.update();
    const state = wrapperWaiting.instance().state;
    expect(state.results).toEqual(3);
  });

  it('expect CPUPage to go to default states when the new game button was pressed', () => {
    wrapperDone.instance().startNewGame();
    wrapperDone.update();
    const state = wrapperDone.instance().state;
    expect(state).toEqual({
        waitingForChoice: true,
        playerItem: '',
        cpuItem: '',
        results: 1
      });
  });

})