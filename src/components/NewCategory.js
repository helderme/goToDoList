import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function NewCategory() {
  const {
    newCategoryInput,
    setNewCategoryInput,
    addCategory
  } = useContext(AppContext);

  const handleInput = (event) => {
    setNewCategoryInput(event.target.value);
  };

  return (
    <div
      className='modal fade'
      id='categoryModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Add Category
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
                Category Name
              </span>
              <input
                type='text'
                className='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                value={newCategoryInput}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={addCategory}
              disabled={newCategoryInput.length < 1}
            >
              Save Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
