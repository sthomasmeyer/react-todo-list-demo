// Import React itself (+) the [useState()] Hook from [node_modules].
import React, { useState } from 'react';
import './NewTodoForm.css';
// The [uuid()] function generates a unique identifier string.
import { v4 as uuid } from 'uuid';

// This React component is designed to render an HTML <form> element...
// Note, the [addItem()] function is passed as a prop(erty) from its...
// 'TodoList' parent. This is useful because it allows us to update...
// the state of the parent component based on the state its child.
const NewTodoForm = ({ addItem }) => {
  // Create an 'INITIAL_STATE' variable w/ key-value pairs aligned to the...
  // <input> element(s) in the <form>.
  const INITIAL_STATE = {
    task: ''
  };

  // Declare a new state variable 'formData' w/ the [useState()] Hook.
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Update the local state w/ the current state of the input elements.
  const handleChange = (evt) => {
    // This form only has one input that needs to be monitored. So, it is easy...
    // to identify the appropriate variables w/ the [evt.target] object.
    const nameKey = evt.target.name;
    const value = evt.target.value;

    // Execute the [setFormData()] function to update the current state.
    setFormData({
      [nameKey]: value
    });
  };

  // This function is designed to be called on form submission. It sends all of the...
  // information contained in the form's current state to the parent component.
  const captureInput = (evt) => {
    evt.preventDefault();
    // Execute [addItem()], and use [uuid()] to give each item a unique [id].
    addItem({ ...formData, id: uuid() });
    // Reset the form to its initial state.
    setFormData(INITIAL_STATE);
  };

  return (
    <div className='NewTodoForm'>
      <form onSubmit={captureInput}>
        <div>
          <label htmlFor='task'>Task: </label>
          <input
            type='text'
            id='task'
            name='task'
            value={formData.task}
            onChange={handleChange}
          />
        </div>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
