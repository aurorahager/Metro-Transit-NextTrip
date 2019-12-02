import React from 'react';
import { shallow } from 'enzyme';

import { findByDataTest } from '../../utils/testUtils';
import StopsView from './stops-view';

const currentTime = "8:00:00";
const times = ['a', 'b', 'c', 'd'];

const setup = () => {
  return shallow(<StopsView
    currentTime={currentTime} times={times}
  />);
};

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-stops-view');
  expect(appComponent.length).toBe(1);
});
test('renders current time', () => {
  const wrapper = setup();
  const time = findByDataTest(wrapper, 'current-time');
  expect(time.length).toBe(1);
});
test('renders stops', () => {
  const wrapper = setup();
  const stopsTable = findByDataTest(wrapper, 'stops-table');
  expect(stopsTable.length).toBe(1);
});