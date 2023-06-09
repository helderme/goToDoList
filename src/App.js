import React from 'react';
import AddTask from './components/AddTask';
import DeleteCategory from './components/DeleteCategory';
import EditTaskModal from './components/EditTaskModal';
import Footer from './components/Footer';
import Header from './components/Header';
import NewCategoryModal from './components/NewCategoryModal';
import TasksCards from './components/TasksCards';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <NewCategoryModal />
      <AddTask />
      <EditTaskModal />
      <DeleteCategory />
      <div className='d-flex flex-column justify-content-between vh-100'>
        <Header />
        <TasksCards />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
