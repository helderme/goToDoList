import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function TasksCards() {
  const {
    tasksList,
    setTasksList,
  } = useContext(AppContext);

  const removeTask = (id) => {
    const newList = tasksList.filter((task) => task.id !== id);
    setTasksList(newList);
  };

  const finishTask = (id) => {
    const taskToFinish = tasksList.find((task) => task.id === id);
    taskToFinish.status = 'done';
    const updateTasks = tasksList.map((task) => (task.id === id ? taskToFinish : task));
    setTasksList(updateTasks);
  };

  return (
    <div className="cards">
      {tasksList.map((task) => (
        <div className="card" key={task.id}>
          <button type="button" onClick={() => finishTask(task.id)}>
            <i className="bi bi-check-circle" />
          </button>
          <span>{task.description}</span>
          <button type="button" onClick={() => removeTask(task.id)}>
            <i className="bi bi-trash3-fill" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TasksCards;
