import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function NewCategory() {
  const {
    newCategoryInput,
    setNewCategoryInput,
    categories,
    setCategories,
    categoryFilter,
    setCategoryFilter,
  } = useContext(AppContext);

  const handleInput = (event) => {
    setNewCategoryInput(event.target.value);
  };

  const addCategory = () => {
    setCategories([...categories, newCategoryInput]);
    setCategoryFilter(newCategoryInput);
    setNewCategoryInput('');
  };

  return (
    <div className={`${categoryFilter === 'New Category' ? 'new-category' : 'display-none'}`}>
      <p>New Category</p>
      <input type="text" value={newCategoryInput} onChange={handleInput} />
      <div className="buttons-add-cancel-category">
        <i className="bi bi-x-square-fill" />
        <button type="button" onClick={addCategory} disabled={newCategoryInput.length < 1}>
          <i className="bi bi-check-square-fill" />
        </button>
      </div>
    </div>
  );
}

export default NewCategory;
