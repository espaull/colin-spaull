import React from 'react';

import AppRouter from './components/AppRouter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
