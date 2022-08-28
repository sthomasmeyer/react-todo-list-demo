import React, { useState } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewToDoForm from './NewTodoForm';

const TodoList = () => {
  const [items, setItems] = useState([]);

  // This function is meant to be passed to the [NewTodoForm()] child of this...
  // [TodoList()] parent component.
  const addItem = (item) => {
    // The following [console.log()] commands are meant to illustrate the nature...
    // of this [addItem()] function, and the data that is being transmitted from...
    // child to parent.
    console.log(`unique id of to-do list item to be added: ${item.id}`);
    console.log(`text of to-do list item to be added: '${item.task}'`);

    // When this function is executed, it will update the current state of this...
    // 'TodoList' component based on the state of its child -- 'NewTodoForm'.
    setItems((items) => [...items, item]);
  };

  const updateItem = (id, updatedTask) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, task: updatedTask } : item
      )
    );
  };

  // This function is meant to be passed to the [Todo()] child of this...
  // [TodoList()] parent component.
  const removeItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // Use JavaScript's [map()] method to cycle through each and every...
  // one of the item objects that is held in this component's current...
  // state (+) render a unique <div> component for each one.
  const todoItemComponents = items.map((item) => (
    <Todo
      key={item.id}
      id={item.id}
      task={item.task}
      updateItem={updateItem}
      removeItem={removeItem}
    />
  ));

  return (
    <div className='TodoList'>
      <h1>To Do List</h1>
      <NewToDoForm addItem={addItem} />
      <ul>{todoItemComponents}</ul>
    </div>
  );
};

export default TodoList;
