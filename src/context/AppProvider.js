import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider(props) {
  const { children } = props;

  const [taskInput, setTaskInput] = useState('teste');
  const [tasksList, setTasksList] = useState('');

  const providerValue = useMemo(() => ({
    taskInput,
    setTaskInput,
    tasksList,
    setTasksList,
  }), [taskInput, tasksList]);

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
