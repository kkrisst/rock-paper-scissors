import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import App from './App';

describe('Testing the App component', () => {

  const wrapper = shallow(<App />);

  it('expect MenuPage to be defined', () => {
    expect(App).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('expect MenuPage to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})