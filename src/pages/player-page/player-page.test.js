import React from 'react'
import { shallow } from 'enzyme'

import PlayerPage from './player-page.component.jsx'

describe('Testing the PlayerPage component', () => {

  const wrapperWaiting = shallow(<PlayerPage />);
  wrapperWaiting.setState({
    waitingForChoice: true
  })

  const wrapperDone = shallow(<PlayerPage />);
  wrapperDone.setState({
    waitingForChoice: false
  })

  it('expect PlayerPage to be defined', () => {
    expect(PlayerPage).toBeDefined();
  });

  it('expect PlayerPage to match snapshot', () => {
    expect(wrapperWaiting).toMatchSnapshot();
  });

  it('expect PlayerPage to have 2 Player choices', () => {
    const playerChoices = wrapperWaiting.find('PlayerChoices');
    expect(playerChoices.length).toEqual(2);
  });

  it('expect PlayerPage to only display instructions when it is waiting for a choice', () => {
    const results = wrapperWaiting.find('.results-container');
    expect(results.length).toEqual(0);
    const instructions = wrapperWaiting.find('.instructions');
    expect(instructions.length).toEqual(1);
  });

  it('expect PlayerPage to display results when it is not waiting for a choice', () => {
    const results = wrapperDone.find('.results-container');
    expect(results.length).toEqual(1);
  });

  it('expect PlayerPage to display a new game button when it is not waiting for a choice', () => {
    const newGameButton = wrapperDone.find('.new-game-button');
    expect(newGameButton.length).toEqual(1);
  });

  it('expect PlayerPage to display a new game button when it is not waiting for a choice', () => {
    const newGameButton = wrapperDone.find('.new-game-button');
    expect(newGameButton.length).toEqual(1);
  });

  it('expect PlayerPage to call onPlayer1Choice on player 1 keypress correctly', () => {
    const wrapperGame = shallow(<PlayerPage />);
    wrapperGame.setState({
      waitingForChoice: true,
      counting: false
    })

    const spy = jest
      .spyOn(wrapperGame.instance(), 'onPlayer1Choice')
      .mockImplementation(() => '')

    let event;
    event = new KeyboardEvent('keydown', {'keyCode': 66});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(0);

    event = new KeyboardEvent('keydown', {'keyCode': 65});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(1);

    event = new KeyboardEvent('keydown', {'keyCode': 83});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(2);

    event = new KeyboardEvent('keydown', {'keyCode': 68});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });

  it('expect PlayerPage to call onPlayer2Choice on player 2 keypress correctly', () => {
    const wrapperGame = shallow(<PlayerPage />);
    wrapperGame.setState({
      waitingForChoice: true,
      counting: false
    })

    const spy = jest
      .spyOn(wrapperGame.instance(), 'onPlayer2Choice')
      .mockImplementation(() => '')

    let event;
    event = new KeyboardEvent('keydown', {'keyCode': 73});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(0);

    event = new KeyboardEvent('keydown', {'keyCode': 74});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(1);

    event = new KeyboardEvent('keydown', {'keyCode': 75});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(2);

    event = new KeyboardEvent('keydown', {'keyCode': 76});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });

  it('expect PlayerPage to calculate victory when player 1 should win', () => {
    const wrapperGame = shallow(<PlayerPage />);
    wrapperGame.setState({
      player1Item: 'paper',
      player2Item: 'rock'
    })
    
    wrapperGame.instance().calculateResults();
    wrapperGame.update();
    const state = wrapperGame.instance().state;
    expect(state.results).toEqual(1);
  });

  it('expect PlayerPage to calculate victory when player 2 should win', () => {
    const wrapperGame = shallow(<PlayerPage />);
    wrapperGame.setState({
      player1Item: 'scissors',
      player2Item: 'rock'
    })
    
    wrapperGame.instance().calculateResults();
    wrapperGame.update();
    const state = wrapperGame.instance().state;
    expect(state.results).toEqual(2);
  });

  it('expect PlayerPage to calculate draw when the correct outcome is draw', () => {
    const wrapperGame = shallow(<PlayerPage />);
    wrapperGame.setState({
      player1Item: 'rock',
      player2Item: 'rock'
    })
    
    wrapperGame.instance().calculateResults();
    wrapperGame.update();
    const state = wrapperGame.instance().state;
    expect(state.results).toEqual(3);
  });

  it('expect PlayerPage to go to default states when the new game button was pressed', () => {
    wrapperDone.instance().startNewGame();
    wrapperDone.update();
    const state = wrapperDone.instance().state;
    expect(state).toEqual({
        waitingForChoice: true,
        player1Item: '',
        player2Item: '',
        results: 1,
        countDown: 5,
        counting: true
      });
  });

/*
  it('expect CPUPage to have 2 Player choices', () => {
    const gameModeButtons = wrapperWaiting.find('PlayerChoices');
    expect(gameModeButtons.length).toEqual(2);
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

  it('expect CPUPage to display a new game button when it is not waiting for a choice', async () => {
    const newGameButton1 = wrapperDone.find('.new-game-button');
    expect(newGameButton1.length).toEqual(1);
  });

  it('expect CPUPage to display a new game button when it is not waiting for a choice', async () => {
    const newGameButton1 = wrapperDone.find('.new-game-button');
    expect(newGameButton1.length).toEqual(1);
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
*/

})