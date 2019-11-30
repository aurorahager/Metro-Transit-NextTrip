import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Search from './search-container';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('it renders without error', () => {
  const wrapper = shallow(<Search />);
  const appComponent = wrapper.find("[data-test='component-search']");
  expect(appComponent.length).toBe(1);
});
test('renders select drop down', () => { });
test('renders submit button', () => { });
test('when making selection state is updated', () => { });
test('when making selection correct API call is made', () => { });
test('on submit page is redirected', () => { });