import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function SelectCategory({ allButton }) {
  const { categoryFilter, setCategoryFilter, categories } = useContext(AppContext);
  const handleCategory = (event) => {
    setCategoryFilter(event.target.value);
  };
  return (
    <select onChange={handleCategory} value={categoryFilter} className="form-select">
      {allButton && <option value="All Tasks">All Tasks</option>}
      {categories.map((category) => <option value={category} key={category}>{category}</option>)}
      <option value="New Category"><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> New Category </button></option>
    </select>
  );
}

SelectCategory.propTypes = {
  allButton: PropTypes.bool.isRequired,
};
export default SelectCategory;
