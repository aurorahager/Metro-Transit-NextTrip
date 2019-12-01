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
test('renders select drop down', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'search-dropdown');
  expect(dropdown.length).toBe(1);
});
test('renders submit button', () => {
  const wrapper = setup();
  const submitButton = findByDataTest(wrapper, 'submit-button');
  expect(submitButton.length).toBe(1);
});
test('when making selection state is updated', () => { });
test('when making selection correct API call is made', () => { });
test('on submit page is redirected', () => { });