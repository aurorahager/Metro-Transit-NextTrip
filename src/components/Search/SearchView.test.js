import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest } from '../../utils/testUtils';
import SearchView from './search-view';

const routes = ['a', 'b', 'c'];
const directions = ['a', 'b', 'c'];
const stops = ['a', 'b', 'c'];
const handleInputChange = jest.fn();
const handleSubmit = jest.fn();

const setup = () => {
  return shallow(<SearchView
    routes={routes}
    directions={directions}
    stops={stops}
    handleInputChange={handleInputChange}
    handleSubmit={handleSubmit} />);
};

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-search-view');
  expect(appComponent.length).toBe(1);
});
test('renders select route drop down', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'search-dropdown-route');
  expect(dropdown.length).toBe(1);
});
test('renders select direction drop down', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'search-dropdown-direction');
  expect(dropdown.length).toBe(1);
});
test('renders select stop drop down', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'search-dropdown-stop');
  expect(dropdown.length).toBe(1);
});
test('renders submit button', () => {
  const wrapper = setup();
  const submitButton = findByDataTest(wrapper, 'submit-button');
  expect(submitButton.length).toBe(1);
});
test('Call handleInputChange with value from dropdown on change', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'search-dropdown-route');
  const mockEvent = { target: { name: 'route', value: '925' } };
  dropdown.simulate('change', mockEvent);
  expect(handleInputChange).toHaveBeenCalledWith(mockEvent);
});
test('on submit handleSubmit is called', () => {
  const wrapper = setup();
  const dropdown = findByDataTest(wrapper, 'submit-button');
  dropdown.simulate('click');
  expect(handleSubmit).toHaveBeenCalled();
});