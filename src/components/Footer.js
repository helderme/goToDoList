import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Footer() {
  const {
    taskInput,
    setTaskInput,
    addTaskToList,
    currentCategory
  } = useContext(AppContext);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <footer className='sticky-bottom'>
      <div className='navbar bg-dark justify-content-center'>
        <div className='col-xs-3'>
          <input
            type='text'
            className='form-control'
            placeholder={`Type a ${currentCategory} task`}
            value={taskInput}
            onChange={handleChange}
          />
        </div>
        <button
          type='button'
          onClick={addTaskToList}
          disabled={taskInput < 1}
          className='btn btn-info'
        >
          <i className='bi bi-check-square-fill' />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
