import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke test:
it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('generates a new item with an operational delete button', () => {
  render(<TodoList />);

  expect(screen.queryByText('X')).not.toBeInTheDocument();

  const addItemBtn = screen.queryByText('Add Task');

  fireEvent.click(addItemBtn);
  expect(screen.getByText('X')).toBeInTheDocument();

  const removeItemBtn = screen.getByText('X');

  fireEvent.click(removeItemBtn);
  expect(screen.queryByText('X')).not.toBeInTheDocument();
});

it('generates to-do list items based on user-input', () => {
  render(<TodoList />);

  function addItem(id = '2001', task = 'lori harvey') {
    const taskInput = screen.getByLabelText('Task:');
    fireEvent.change(taskInput, { target: { value: task } });
    const addItemBtn = screen.queryByText('Add Task');
    fireEvent.click(addItemBtn);
  }

  addItem();

  const addedTask = screen.queryByText('lori harvey');
  expect(addedTask).toBeInTheDocument();
});
