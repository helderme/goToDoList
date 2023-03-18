import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function TasksCards() {
  const {
    statusFilter,
    tasksList,
    setTasksList,
    categoryFilter,
    setCategoryFilter,
  } = useContext(AppContext);

  const removeTask = (id) => {
    const newList = tasksList.filter((task) => task.id !== id);
    setTasksList(newList);
  };

  const finishTask = (id) => {
    const taskToFinish = tasksList.find((task) => task.id === id);
    taskToFinish.status = 'done';
    const updateTasks = tasksList.map((task) => (task.id === id ? taskToFinish : task));
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
      <div className='container'>
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
                    onClick={() => finishTask(task.id)}
                  >
                    <i className='bi bi-check-circle' />
                  </button>
                )}
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
        ))}
      </div>
    </div>
  );
}

export default TasksCards;
