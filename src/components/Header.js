import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {
  const { setStatusFilter, numberTasks } = useContext(AppContext);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  return (
    <div className="nav-bar">
      <select id="cars" name="cars">
        <option value="default">Default</option>
        <option value="garden">Garden</option>
        <option value="home">Home</option>
        <option value="job">Job</option>
      </select>
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
