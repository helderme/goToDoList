import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import NewCategoryInput from './NewCategoryInput';
import SelectCategory from './SelectCategory';

function AddTask() {
  const { taskInput, setTaskInput, showCategoryInput, setShowCategoryInput, addTaskToList } =
    useContext(AppContext);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <div
      className='modal fade'
      id='createTaskModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Add Task
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='inputGroup-sizing-default'>
                Task
              </span>
              <input
                type='text'
                className='form-control'
                aria-describedby='inputGroup-sizing-default'
                value={taskInput}
                onChange={handleChange}
                maxLength="100"
              />
            </div>
            <SelectCategory allButton={false} newCategory={false} />
            <button
              type='button'
              className='btn btn-outline-primary mt-4'
              onClick={() => setShowCategoryInput(!showCategoryInput)}
            >
              <i className='bi bi-folder-plus' />
              <span> New category</span>
            </button>
            {showCategoryInput && <NewCategoryInput />}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={addTaskToList}
              disabled={taskInput < 1}
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
