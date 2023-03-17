import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider(props) {
  const { children } = props;

  const [taskInput, setTaskInput] = useState('teste');
  const [tasksList, setTasksList] = useState([]);

  const [lastId, setLastId] = useState(0);

  const [categories, setCategories] = useState(['Default', 'Home', 'Garden']);
  const [categoryFilter, setCategoryFilter] = useState('All Tasks');
  const [newCategoryInput, setNewCategoryInput] = useState('');

  const [statusFilter, setStatusFilter] = useState('pending');

  const numberTasks = (status) => tasksList.filter((task) => task.status === status).length;

  const providerValue = useMemo(() => ({
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
  }), [
    taskInput,
    tasksList,
    statusFilter,
    lastId,
    categories,
    categoryFilter,
    newCategoryInput]);

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
