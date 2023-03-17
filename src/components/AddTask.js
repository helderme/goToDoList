import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SelectCategory from './SelectCategory';

function AddTask() {
  const {
    taskInput,
    setTaskInput,
    tasksList,
    setTasksList,
    lastId,
    setLastId,
    categoryFilter,
    displayAddTask,
    setDisplayAddTask,
  } = useContext(AppContext);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDisplay = () => {
    setDisplayAddTask(!displayAddTask);
  };

  const addTaskToList = (category) => {
    const taskToAdd = {
      id: lastId + 1,
      description: taskInput,
      status: 'pending',
      category,
    };
    if (taskInput.length > 1) {
      const newTasks = [...tasksList, taskToAdd];
      setTasksList(newTasks);
      setTaskInput('');
      setLastId(taskToAdd.id);
    }
  };

  return (
    <>
      <div className={displayAddTask ? 'new-task-screen' : 'display-none'}>
        <span>Task:</span>
        <input type="text" placeholder="Type the task here" value={taskInput} onChange={handleChange} />
        <span>Category:</span>
        <SelectCategory allButton={false} />
        <div className="buttons-add-cancel-category">
          <button type="button" onClick={handleDisplay}>
            <i className="bi bi-x-square-fill" />
          </button>
          <button type="button" onClick={() => addTaskToList(categoryFilter)} disabled={taskInput < 1}>
            <i className="bi bi-check-square-fill" />
          </button>
        </div>
      </div>
      <div className="add-task-container">
        <input type="text" placeholder="Type a default task" value={taskInput} onChange={handleChange} />
        <button type="button" onClick={() => addTaskToList('Default')} disabled={taskInput < 1}>
          <i className="bi bi-check-square-fill" />
        </button>
      </div>
    </>

  );
}

export default AddTask;
