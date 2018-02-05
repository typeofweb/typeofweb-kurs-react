import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UsersList from './UsersList'

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes UsersList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true)
});

it('passes all users to the UsersList', () => {
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
})

it('filters names on input', () => {
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);

  app.find('input').simulate('input', {currentTarget: {value: 'M'}})
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Marta', 'Tomek']);
});
