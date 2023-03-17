import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function TasksCards() {
  const {
    tasksList,
  } = useContext(AppContext);

  /*   const removeTask = (id) => {

  } */

  return (
    <div className="cards">
      {tasksList.map((task) => (
        <div className="card">
          <input type="checkbox" />
          <span>{task.description}</span>
          <button type="button">
            <i className="bi bi-trash3-fill" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TasksCards;
