import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SelectCategory from './SelectCategory';

function Header() {
  const {
    setStatusFilter,
    numberTasks,
  } = useContext(AppContext);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <SelectCategory allButton />
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button" onClick={() => handleStatusFilter('pending')}>
          <i className="bi bi-hourglass-split" />
          {numberTasks('pending')}
        </button>
        <button className="btn btn-primary" type="button" onClick={() => handleStatusFilter('done')}>
          <i className="bi bi-check-all" />
          {numberTasks('done')}
        </button>
      </div>
    </nav>
  );
}

export default Header;
