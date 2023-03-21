import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import VoiceTask from './VoiceTask';

function Footer() {
  const { taskInput, setTaskInput, addTaskToList, currentCategory } = useContext(AppContext);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
    if (event.key === 'Enter') {
      addTaskToList();
    }
  };

  return (
    <footer className='sticky-bottom'>
      <div className='navbar bg-dark justify-content-center'>
        <div className='align-items-center'>
          <div className="input-group">
            <input
              type='text'
              className='form-control'
              placeholder={`Type a ${currentCategory} task`}
              data-testid="input-fast-task"
              value={taskInput}
              onChange={handleChange}
              onKeyDown={handleChange}
              maxLength='100'
            />
            <VoiceTask />
          </div>
        </div>
        <button
          type='button'
          onClick={addTaskToList}
          disabled={taskInput < 1}
          data-testid="footer-send-task"
          className='btn btn-info ms-2'
        >
          <i className='bi bi-check-square-fill fs-5' />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
