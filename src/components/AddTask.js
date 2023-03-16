import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function AddTask() {
  const { taskInput, setTaskInput } = useContext(AppContext);

  const handleTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <div className="add-task-container">
      <input type="text" placeholder="Type the task here" value={taskInput} onChange={handleTaskInput} />
      {taskInput}
      <i className="bi bi-plus-circle-fill" />
    </div>
  );
}

export default AddTask;
