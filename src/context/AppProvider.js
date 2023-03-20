import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

function AppProvider(props) {
  const { children } = props;

  const localStorage = getLocalStorage()

  const [taskInput, setTaskInput] = useState('');
  const [tasksList, setTasksList] = useState(localStorage.tasksList);
  const [taskToEdit, setTaskToEdit] = useState({});


  const [lastId, setLastId] = useState(localStorage.lastId);

  const [categories, setCategories] = useState(localStorage.categories);
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [categoryAlreadyExists, setCategoryAlreadyExists] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState();

  const [statusFilter, setStatusFilter] = useState('pending');
  const [previousFilter, setPreviousFilter] = useState('')

  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const numberTasks = (status) => tasksList.filter((task) => task.status === status).length;

  const addCategory = () => {
    setCategories([...categories, newCategoryInput]);
    setCategoryFilter(newCategoryInput);
    setNewCategoryInput('');
    setShowCategoryInput(false);
  };

  const currentCategory = categoryFilter === 'All Categories' ? 'Default' : categoryFilter;

  const addTaskToList = () => {
    const taskToAdd = {
      id: lastId + 1,
      description: taskInput,
      status: 'pending',
      category: currentCategory,
    };
    if (taskInput.length > 1) {
      const newTasks = [...tasksList, taskToAdd];
      setTasksList(newTasks);
      setTaskInput('');
      setLastId(taskToAdd.id);
      setStatusFilter('pending')
    }
  };

  const handleCategoryInput = (event) => {
    const alreadyExists = categories.find((category) => category.toLowerCase() === event.target.value.toLowerCase())
    setCategoryAlreadyExists(alreadyExists)
    setNewCategoryInput(event.target.value);
  };



  useEffect(() => {
    setLocalStorage({ categories, lastId, tasksList })
  }, [categories, lastId, tasksList]);

  const providerValue = useMemo(
    () => ({
      taskInput,
      setTaskInput,
      tasksList,
      setTasksList,
      lastId,
      setLastId,
      statusFilter,
      setStatusFilter,
      numberTasks,
      categories,
      setCategories,
      categoryFilter,
      setCategoryFilter,
      newCategoryInput,
      setNewCategoryInput,
      addCategory,
      showCategoryInput,
      setShowCategoryInput,
      addTaskToList,
      currentCategory,
      handleCategoryInput,
      categoryAlreadyExists,
      taskToEdit,
      setTaskToEdit,
      previousFilter,
      setPreviousFilter,
      categoryToDelete,
      setCategoryToDelete
    }),
    [taskInput, tasksList, statusFilter, lastId, categories, categoryFilter, newCategoryInput, showCategoryInput, categoryAlreadyExists, taskToEdit, categoryToDelete],
  );

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
