import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function AddTask() {
  const {
    taskInput,
    setTaskInput,
    tasksList,
    setTasksList,
    lastId,
    setLastId,
  } = useContext(AppContext);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTaskToList = () => {
    const taskToAdd = {
      id: lastId + 1,
      description: taskInput,
      status: 'pending',
    };
    if (taskInput.length > 1) {
      const newTasks = [...tasksList, taskToAdd];
      setTasksList(newTasks);
      setTaskInput('');
      setLastId(taskToAdd.id);
    }
  };

  return (
    <div className="add-task-container">
      <input type="text" placeholder="Type the task here" value={taskInput} onChange={handleChange} />
      <button type="button" onClick={addTaskToList} disabled={taskInput < 1}>
        <i className="bi bi-plus-circle-fill" />
      </button>
    </div>
  );
}

export default AddTask;
