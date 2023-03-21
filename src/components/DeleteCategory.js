import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function DeleteCategory() {
  const {
    categories,
    setCategories,
    categoryToDelete,
    categoryFilter,
    setCategoryFilter,
    tasksList,
    setTasksList,
  } = useContext(AppContext);

  const deleteCategory = () => {
    const newCategories = categories.filter((category) => category !== categoryToDelete);
    setCategories(newCategories);
    if (categoryFilter === categoryToDelete) setCategoryFilter('All Categories');
    const newTaskList = tasksList.filter((task) => task.category !== categoryToDelete);
    setTasksList(newTaskList);
  };

  return (
    <div
      className='modal'
      aria-hidden='true'
      id='deleteCategoryModal'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Category</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            <p>Are you want to delete this category?</p>
            <p>All tasks in this category will also be deleted.</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-danger'
              data-bs-dismiss='modal'
              onClick={deleteCategory}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCategory;
