import React from 'react';
import AppBar from './components/Menu/appbar';
import HomePage from './page/home';
import './App.css';

function App() {
  return (
    <div className="App">
    <AppBar />
      <div className="App-header">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
