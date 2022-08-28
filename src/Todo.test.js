import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

// Smoke test:
it('renders without crashing', () => {
  render(<Todo />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
