import React from 'react';
import { mount } from 'enzyme';
import { findByDataTest } from './utils/testUtils';
import API from './utils/API';
import App from './App';

const mockFetchTransitData = jest.fn();

const setup = () => {
  mockFetchTransitData.mockClear();
  API.fetchTransitData = mockFetchTransitData;
  return mount(<App />)
}

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
describe('fetchTransitData calls', () => {
  test('fetchTransitData gets called on mount', () => {
    setup();
    expect(mockFetchTransitData).toHaveBeenCalled();
  });
});