import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TasksCards from './components/TasksCards';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <main>
        <div className="nav-bar">HEADER</div>
        <TasksCards />
        <AddTask />
      </main>
    </AppProvider>
  );
}

export default App;
