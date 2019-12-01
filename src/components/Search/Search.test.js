import React from 'react';
import { mount } from 'enzyme';

import { findByDataTest } from '../../utils/testUtils';
import Search from './search-container';

// Factory function to create MountWrapper for the Stops component
const setup = (props = {}, state = null) => {
  return mount(<Search {...props} />);
};

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-search');
  expect(appComponent.length).toBe(1);
});
test('renders select drop downs', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'search-dropdown');
  expect(dropdown.length).toBe(3);
});
test('renders submit button', () => {
  const wrapper = setup();
  const submitButton = findByDataTest(wrapper, 'submit-button');
  expect(submitButton.length).toBe(1);
});
describe('state controlled input fields', () => {
  test('state updates with value from dropdown on change', () => {
    // const mockSetStop = jest.fn();
    // React.useState = jest.fn(() => [{ route: '', direction: '', stop: '' }, mockSetStop]);
    // const wrapper = setup();
    // const dropdown = findByDataTest(wrapper, 'search-dropdown');
    // const mockEvent = { target: { name: 'route', value: '925' } };
    // dropdown.simulate('change', mockEvent);
    // expect(mockSetStop).toHaveBeenCalledWith({ "direction": "", "route": "925", "stop": "" });
  });
});
test('when making selection correct API call is made', () => { });
test('on submit page is redirected', () => { });