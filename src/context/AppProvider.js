import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider(props) {
  const { children } = props;

  const [taskInput, setTaskInput] = useState('teste');
  const [tasksList, setTasksList] = useState([]);
  const [lastId, setLastId] = useState(0);

  const [statusFilter, setStatusFilter] = useState('all');

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
  }), [taskInput, tasksList, statusFilter, lastId]);

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
