import React, { useContext } from 'react';
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
  } = useContext(AppContext);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
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

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createTaskModal">
        <span>Add with Category</span>
        <i className="bi bi-plus-circle-fill" />
      </button>
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
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
                <SelectCategory allButton={false} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => addTaskToList(categoryFilter)} disabled={taskInput < 1}>Save Task</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="d-flex flex-wrap justify-content-center align-items-bottom py-3 my-4 border-top navbar fixed-bottom">
        <input type="text" placeholder="Type a default task" value={taskInput} onChange={handleChange} />
        <button type="button" onClick={() => addTaskToList('Default')} disabled={taskInput < 1}>
          <i className="bi bi-check-square-fill" />
        </button>
      </footer>
    </>
  );
}

export default AddTask;
