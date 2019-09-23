import React from 'react'
import { shallow } from 'enzyme'

import Header from './header.component.jsx'

describe('Testing the Header component', () => {

  const wrapper = shallow(<Header />);

  it('expect Header to be defined', () => {
    expect(Header).toBeDefined();
  });

  it('expect Header to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})