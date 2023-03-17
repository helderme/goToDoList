import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import NewCategory from './components/NewCategory';
import TasksCards from './components/TasksCards';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <main>
        <NewCategory />
        <Header />
        <TasksCards />
        <AddTask />
      </main>
    </AppProvider>
  );
}

export default App;
