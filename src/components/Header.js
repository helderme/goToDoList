import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SelectCategory from './SelectCategory';

function Header() {
  const {
    setStatusFilter,
    numberTasks,
    setCategoryFilter,
  } = useContext(AppContext);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setCategoryFilter('All Categories');
  };

  return (
    <header className='navbar bg-dark'>
      <nav className='container'>
        <button type='button' className='btn btn-dark btn-lg'>
          <i className='bi bi-check2-circle' />
        </button>
        <SelectCategory allButton newCategory />
        <div className='gap-3'>
          <button
            className='btn btn-primary mx-2'
            type='button'
            onClick={() => handleStatusFilter('pending')}
          >
            <i className='bi bi-hourglass-split' />
            {numberTasks('pending')}
          </button>
          <button
            className='btn btn-success'
            type='button'
            onClick={() => handleStatusFilter('done')}
          >
            <i className='bi bi-check-all' />
            {numberTasks('done')}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
