import React from 'react'
import { shallow } from 'enzyme'

import PlayerChoices from './player-choices.component.jsx'

describe('Testing the PlayerChoices component', () => {

  let handleChoiceMock = jest.fn();
  const wrapper = shallow(<PlayerChoices handleChoice={handleChoiceMock} />);

  it('expect PlayerChoices to be defined', () => {
    expect(PlayerChoices).toBeDefined();
  });

  it('expect PlayerChoices to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect PlayerChoices to have choices', () => {
    const choices = wrapper.find('.choice');
    expect(choices.length).toEqual(3);
  });

  it('expect no choice to be selected', () => {
    const choices = wrapper.find('.selected');
    expect(choices.length).toEqual(0);
  });

  it('expect one choice to be selected', () => {
    const wrapper2 = shallow(<PlayerChoices selected={'rock'} showSelected={true} />);
    const choices = wrapper2.find('.selected');
    expect(choices.length).toEqual(1);
  });

  it('expect no choice to be selected when showing selected is disabled', () => {
    const wrapper2 = shallow(<PlayerChoices selected={'rock'} showSelected={false} />);
    const choices = wrapper2.find('.selected');
    expect(choices.length).toEqual(0);
  });

  it('expect handleChoice to be called on choice click with the correct parameter', () => {
    wrapper.find('.choice').at(0).simulate('click');
    expect(handleChoiceMock).toBeCalled();
    expect(handleChoiceMock).toBeCalledWith('rock');

    wrapper.find('.choice').at(1).simulate('click');
    expect(handleChoiceMock).toBeCalledWith('paper');

    wrapper.find('.choice').at(2).simulate('click');
    expect(handleChoiceMock).toBeCalledWith('scissors');
  });

})