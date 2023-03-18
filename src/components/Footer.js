import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Footer() {
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
    <footer className="sticky-bottom">
      <div className="navbar bg-dark justify-content-center">
        <div className="col-xs-3">
          <input type="text" className="form-control" placeholder="Type a default task" value={taskInput} onChange={handleChange} />
        </div>
        <button type="button" onClick={() => addTaskToList('Default')} disabled={taskInput < 1} className="btn btn-info">
          <i className="bi bi-check-square-fill" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
