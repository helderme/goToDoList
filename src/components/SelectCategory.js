import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function SelectCategory({ allButton, newCategory }) {
  const { categoryFilter, setCategoryFilter, categories } = useContext(AppContext);

  return (
    <div className='dropdown d-grid gap-2 col-4'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {categoryFilter}
      </button>
      <ul className='dropdown-menu'>
        {allButton && (
          <li className='dropdown-item'>
            <button
              type='button'
              onClick={() => setCategoryFilter('All Categories')}
              className='btn btn-outline-dark'
            >
              All Categories
            </button>
          </li>
        )}
        {categories.map((category) => (
          <li className='dropdown-item'>
            <input
              type='button'
              onClick={() => setCategoryFilter(category)}
              value={category}
              className='btn btn-outline-primary'
            />
          </li>
        ))}
        {newCategory && (
          <li className='dropdown-item'>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#categoryModal'
              data-dismiss='createTaskModal'
            >
              New Category
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

SelectCategory.propTypes = {
  allButton: PropTypes.bool.isRequired,
  newCategory: PropTypes.bool.isRequired,
};
export default SelectCategory;
