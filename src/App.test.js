import React from 'react';
import { mount } from 'enzyme';
import { findByDataTest } from './utils/testUtils';
import App from './App';

const setup = () => {
  return mount(<App />)
}

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});