import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import SelectCategory from './SelectCategory';

function AddTask() {
  const {
    taskInput,
    setTaskInput,
    tasksList,
    setTasksList,
    lastId,
    setLastId,
    categoryFilter,
    newCategoryInput,
    setNewCategoryInput,
    setCategories,
    categories,
    setCategoryFilter,
  } = useContext(AppContext);

  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleInput = (event) => {
    setNewCategoryInput(event.target.value);
  };

  const addTaskToList = (category) => {
    const taskToAdd = {
      id: lastId + 1,
      description: taskInput,
      status: 'pending',
      category,
    };
    if (taskInput.length > 1) {
      const newTasks = [...tasksList, taskToAdd];
      setTasksList(newTasks);
      setTaskInput('');
      setLastId(taskToAdd.id);
    }
  };

  const addCategory = () => {
    setCategories([...categories, newCategoryInput]);
    setCategoryFilter(newCategoryInput);
    setNewCategoryInput('');
    setShowCategoryInput(false);
  };

  return (
    <div className="modal fade" id="createTaskModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Task</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={taskInput} onChange={handleChange} />
            </div>
            <SelectCategory />
            <button type="button" className="btn btn-outline-primary mt-4" onClick={() => setShowCategoryInput(!showCategoryInput)}>
              <i className="bi bi-folder-plus" />
              <span> New category</span>
            </button>
            {showCategoryInput && (
              <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={newCategoryInput} onChange={handleInput} />
                <button type="button" className="btn btn-primary" onClick={addCategory} disabled={newCategoryInput.length < 1}>Save Category</button>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => addTaskToList(categoryFilter)} disabled={taskInput < 1}>Save Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
