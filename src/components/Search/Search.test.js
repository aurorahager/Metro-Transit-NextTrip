import React from 'react';
import { mount } from 'enzyme';
import { TransitContext } from '../../context/transit-context';
import { findByDataTest } from '../../utils/testUtils';
import API from '../../utils/API';
import Search from './search-container';

const mockFetchTransitData = jest.fn();
const mockDispatch = jest.fn();
const mockUseReducer = jest.fn()
  .mockReturnValue([
    { routes: [], directions: [], stops: [] },
    mockDispatch
  ]);
React.useReducer = mockUseReducer;

const setup = () => {
  mockFetchTransitData.mockClear();
  API.fetchTransitData = mockFetchTransitData;

  return mount(
    <TransitContext.Provider value={[{ route: '', direction: '', stop: '' }, jest.fn()]}>
      <Search />
    </TransitContext.Provider>
  );
};

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'component-search');
  expect(appComponent.length).toBe(1);
});
describe('state controlled input fields', () => {
  test('context state updates with value from routes dropdown on change', () => {
    const mockSetStop = jest.fn();
    React.useContext = jest.fn(() => [{ route: '', direction: '', stop: '' }, mockSetStop]);
    const wrapper = setup();
    const dropdown = findByDataTest(wrapper, 'search-dropdown-route');
    const mockEvent = { target: { name: 'route', value: '925' } };
    dropdown.simulate('change', mockEvent);
    expect(mockSetStop).toHaveBeenCalledWith({ "direction": "", "route": "925", "stop": "" });
  });
  test('context state updates with value from directions dropdown on change', () => {
    const mockSetStop = jest.fn();
    React.useContext = jest.fn(() => [{ route: '', direction: '', stop: '' }, mockSetStop]);
    const wrapper = setup();
    const dropdown = findByDataTest(wrapper, 'search-dropdown-direction');
    const mockEvent = { target: { name: 'direction', value: '4' } };
    dropdown.simulate('change', mockEvent);
    expect(mockSetStop).toHaveBeenCalledWith({ "direction": "4", "route": "", "stop": "" });
  });
  test('context state  updates with value from stops dropdown on change', () => {
    const mockSetStop = jest.fn();
    React.useContext = jest.fn(() => [{ route: '', direction: '', stop: '' }, mockSetStop]);
    const wrapper = setup();
    const dropdown = findByDataTest(wrapper, 'search-dropdown-stop');
    const mockEvent = { target: { name: 'stop', value: 'TNF' } };
    dropdown.simulate('change', mockEvent);
    expect(mockSetStop).toHaveBeenCalledWith({ "direction": "", "route": "", "stop": "TNF" });
  });
});
describe('fetchTransitData calls', () => {
  test('fetchTransitData gets called on mount', () => {
    setup();
    expect(mockFetchTransitData).toHaveBeenCalled();
  });
  test('fetchTransitData is called with correct arguments', () => {
    setup();
    expect(mockFetchTransitData).toHaveBeenCalledWith('Routes', 'setRoutes', mockDispatch);
  });
});
