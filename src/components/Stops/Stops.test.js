import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Stops from './stops-container';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('it renders without error', () => {
  const wrapper = shallow(<Stops />);
  const appComponent = wrapper.find("[data-test='component-stops']");
  expect(appComponent.length).toBe(1);
});
test('renders current time', () => { });
test('renders stops', () => { });
