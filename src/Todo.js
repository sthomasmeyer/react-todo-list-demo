import React, { useState } from 'react';
import './Todo.css';

// This React component is designed to render an HTML <div> element.
const Todo = ({ id, task, updateItem, removeItem }) => {
  const [updateTask, setUpdateTask] = useState(task);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleUpdate = () => {
    setIsUpdating((update) => !update);
  };

  const handleChange = (evt) => {
    setUpdateTask(evt.target.value);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateItem(id, updateTask);
    setIsUpdating(false);
  };

  // Remember, the [removeItem()] function expects an 'id' attribute to be passed...
  // to it.
  const remove = () => removeItem(id);

  let jsx = (
    <div className='Todo'>
      <li>{task}</li>
      <button onClick={remove}>X</button>
      <button onClick={toggleUpdate}>Update</button>
    </div>
  );

  if (isUpdating) {
    jsx = (
      <div className='Todo'>
        <form onSubmit={handleUpdate}>
          <input type='text' value={updateTask} onChange={handleChange} />
          <button>Confirm Update</button>
        </form>
      </div>
    );
  }

  return jsx;
};

export default Todo;
