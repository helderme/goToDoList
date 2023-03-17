import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function TasksCards() {
  const {
    statusFilter,
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

  const filterTask = () => {
    if (statusFilter === 'all') {
      return tasksList;
    }
    const filtered = tasksList.filter((task) => task.status === statusFilter);
    return filtered;
  };

  const status = statusFilter === 'done' ? 'Completed' : 'Pending';

  return (
    <div className="cards">
      <p>{`${status} Tasks`}</p>
      {
      filterTask().map((task) => (
        <div className="card" key={task.id}>
          <button type="button" onClick={() => finishTask(task.id)}>
            <i className="bi bi-check-circle" />
          </button>
          <span>{task.description}</span>
          <button type="button" onClick={() => removeTask(task.id)}>
            <i className="bi bi-trash3-fill" />
          </button>
        </div>
      ))
      }
    </div>
  );
}

export default TasksCards;
