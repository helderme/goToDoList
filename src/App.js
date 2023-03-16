import React from 'react';
import './App.css';

function App() {
  return (
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
      </div>
      <div className="fast-add-bar">
        <input type="text" placeholder="Type the task here" />
        <i className="bi bi-plus-circle-fill" />
      </div>
    </main>
  );
}

export default App;
