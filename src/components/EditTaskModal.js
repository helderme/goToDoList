import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import NewCategoryInput from './NewCategoryInput';
import SelectCategory from './SelectCategory';

function EditTaskModal() {
  const {
    taskToEdit,
    setTaskToEdit,
    tasksList,
    setTasksList,
    previousFilter,
    setCategoryFilter,
    currentCategory,
    showCategoryInput,
    setShowCategoryInput,
  } = useContext(AppContext);

  const handleDescription = (event) => {
    const editedDescripiton = { ...taskToEdit };
    editedDescripiton.description = event.target.value;
    setTaskToEdit(editedDescripiton);
  };

  const saveEditedTask = () => {
    const editedTask = { ...taskToEdit };
    editedTask.category = currentCategory;
    const newList = tasksList.map((task) => (task.id === editedTask.id ? editedTask : task));
    setTasksList(newList);
    setCategoryFilter(previousFilter);
    setTaskToEdit({});
  };

  return (
    <div className='modal' aria-hidden='true' id='editTaskModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Edit Task</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            <div className='input-group mb-3'>
              <span className='input-group-text'>Task</span>
              <input
                type='text'
                className='form-control'
                value={taskToEdit.description || ''}
                onChange={handleDescription}
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
              onClick={saveEditedTask}
              data-bs-dismiss='modal'
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
