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
    if (event.key === 'Enter') {
      addTaskToList()
    }
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
            onKeyDown={handleChange}
          />
        </div>
        <button
          type='button'
          onClick={addTaskToList}
          disabled={taskInput < 1}
          className='btn btn-info ms-2'
        >
          <i className='bi bi-check-square-fill fs-5' />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
