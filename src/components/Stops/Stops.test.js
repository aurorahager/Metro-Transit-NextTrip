import React from 'react';
import { mount } from 'enzyme';

import { findByDataTest } from '../../utils/testUtils';
import Stops from './stops-container';

// Factory function to create MountWrapper for the Stops component
const setup = (props = {}, state = null) => {
  return mount(<Stops {...props} />);
};

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-stops');
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
