import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <main>
        <div className="nav-bar">HEADER</div>
        <div className="cards">
          <div className="card">
            <input type="checkbox" />
            <span>Titulo da Tarefa</span>
          </div>
          <div className="card">
            <input type="checkbox" />
            <span>Titulo da Tarefa</span>
          </div>
          <AddTask />
        </div>

      </main>
    </AppProvider>
  );
}

export default App;
