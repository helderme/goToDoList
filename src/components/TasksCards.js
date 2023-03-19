import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import logo from '../go.svg'

function TasksCards() {
  const {
    statusFilter,
    tasksList,
    setTasksList,
    categoryFilter,
    setCategoryFilter,
    setTaskToEdit,
    setPreviousFilter
  } = useContext(AppContext);

  const removeTask = (id) => {
    const newList = tasksList.filter((task) => task.id !== id);
    setTasksList(newList);
  };

  const changeStatusTask = (id, status) => {
    const taskTochange = tasksList.find((task) => task.id === id);
    taskTochange.status = status;
    const updateTasks = tasksList.map((task) => (task.id === id ? taskTochange : task));
    setTasksList(updateTasks);
  };

  const filterTaskStatus = (list) => {
    if (statusFilter === 'all') {
      return list;
    }
    const filtered = list.filter((task) => task.status === statusFilter);
    return filtered;
  };

  const filterTaskCategory = (list) => {
    if (categoryFilter === 'All Categories') {
      return list;
    }
    const filtered = list.filter((task) => task.category === categoryFilter);
    return filtered;
  };

  const filterTask = () => {
    const filteredByStatus = filterTaskStatus(tasksList);
    const filteredByCategory = filterTaskCategory(filteredByStatus);
    return filteredByCategory;
  };

  const changeToDefault = () => {
    if (categoryFilter === 'All Categories') setCategoryFilter('Default');
  };

  const handleTaskToEdit = (task) => {
    setPreviousFilter(categoryFilter)
    setTaskToEdit(task)
  }

  const status = statusFilter === 'done' ? 'Completed' : 'Pending';

  return (
    <div className='flex-grow-1'>
      <div className='container d-flex justify-content-between'>
        <span className='fs-5 text-center align-self-center'>{`${status} Tasks`}</span>
        <button
          type='button'
          className='btn btn-primary my-2'
          data-bs-toggle='modal'
          data-bs-target='#createTaskModal'
          onClick={changeToDefault}
        >
          <i className='bi bi-plus-circle-fill' />
          <span> Add Task</span>
        </button>
      </div>
      <div className="container d-flex justify-content-center">
        {filterTask().length === 0 &&
          <div className="d-flex flex-column">
            <span className="fs-3 text-center mb-4">No tasks in {categoryFilter}</span>
            <img src={logo} alt="logo" className="w-100 m-auto" />
          </div>

        }
      </div>
      <div className="container">
        {filterTask().map((task) => (
          <div className='card mb-2' key={task.id}>
            <div className='card-body d-flex justify-content-between align-items-center'>
              <div>
                <p className='fs-3'>{task.description}</p>
                <span className='fs-6'>{task.category}</span>
              </div>
              <div className='d-flex flex-column gap-2'>
                {task.status === 'pending' && (
                  <button
                    className='btn btn-outline-success'
                    type='button'
                    onClick={() => changeStatusTask(task.id, 'done')}
                  >
                    <i className='bi bi-check-circle' />
                  </button>
                )}
                {task.status === 'done' && (
                  <button
                    className='btn btn-outline-primary'
                    type='button'
                    onClick={() => changeStatusTask(task.id, 'pending')}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                  </button>
                )}
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editTaskModal"
                    onClick={() => handleTaskToEdit(task)}
                  >
                    <i className="bi bi-pencil-fill" />
                  </button>
                  <button
                    className='btn btn-outline-danger'
                    type='button'
                    onClick={() => removeTask(task.id)}
                  >
                    <i className='bi bi-trash3-fill' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksCards;
