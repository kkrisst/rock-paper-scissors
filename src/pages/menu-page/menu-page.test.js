import React from 'react'
import { shallow } from 'enzyme'

import MenuPage from './menu-page.component.jsx'

describe('Testing the MenuPage component', () => {

  const wrapper = shallow(<MenuPage />);

  it('expect MenuPage to be defined', () => {
    expect(MenuPage).toBeDefined();
  });

  it('expect MenuPage to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect MenuPage to have 2 game mode buttons', () => {
    const gameModeButtons = wrapper.find('.game-modes .button');
    expect(gameModeButtons.length).toEqual(2);
  });

})