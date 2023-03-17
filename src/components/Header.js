import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {
  const {
    setStatusFilter,
    numberTasks,
    categories,
    categoryFilter,
    setCategoryFilter,
  } = useContext(AppContext);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  const handleCategory = (event) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <div className="nav-bar">
      <select onChange={handleCategory} value={categoryFilter}>
        {categories.map((category) => <option value={category} key={category}>{category}</option>)}
        <option value="New Category">New Category</option>
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
