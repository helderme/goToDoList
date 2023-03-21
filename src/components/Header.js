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
          <i className='bi bi-check2-circle text-success' />
          <span className='d-none d-md-inline'>TO DO LIST</span>
        </button>
        <SelectCategory allButton newCategory />
        <div className='gap-3'>
          <button
            className='btn btn-primary mx-2'
            type='button'
            onClick={() => handleStatusFilter('pending')}
            data-testid='pending-btn-and-number'
          >
            <i className='bi bi-hourglass-split' />
            {numberTasks('pending')}
          </button>
          <button
            className='btn btn-success'
            type='button'
            onClick={() => handleStatusFilter('done')}
            data-testid='done-btn-and-number'
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
