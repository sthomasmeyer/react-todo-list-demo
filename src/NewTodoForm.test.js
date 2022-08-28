import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke test:
it('renders without crashing', () => {
  render(<NewTodoForm />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
