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
    <div className="nav-bar">
      <SelectCategory allButton />
      <button type="button" onClick={() => handleStatusFilter('pending')}>
        {numberTasks('pending')}
        <i className="bi bi-hourglass-split" />
      </button>
      <button type="button" onClick={() => handleStatusFilter('done')}>
        {numberTasks('done')}
        <i className="bi bi-check-all" />
      </button>
    </div>
  );
}

export default Header;
