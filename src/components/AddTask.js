import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SelectCategory from './SelectCategory';

function AddTask() {
  const {
    taskInput,
    setTaskInput,
    newCategoryInput,
    handleCategoryInput,
    addCategory,
    showCategoryInput,
    setShowCategoryInput,
    addTaskToList,
    categoryAlreadyExists
  } = useContext(AppContext);

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
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                value={taskInput}
                onChange={handleChange}
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
            {showCategoryInput && (
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Sizing example input'
                  aria-describedby='inputGroup-sizing-default'
                  value={newCategoryInput}
                  onChange={handleCategoryInput}
                />
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={addCategory}
                  disabled={newCategoryInput.length < 1 || categoryAlreadyExists}
                >
                  Save Category
                </button>
                {categoryAlreadyExists && <span>Category Already Exists</span>}
              </div>
            )}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
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
