import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TasksCards from './components/TasksCards';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <main>
        <Header />
        <TasksCards />
        <AddTask />
      </main>
    </AppProvider>
  );
}

export default App;
