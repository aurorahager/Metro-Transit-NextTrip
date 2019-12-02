import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest } from './utils/testUtils';
import App from './App';


const setup = () => {
  return shallow(<App />);
};

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});