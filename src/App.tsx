import React from 'react';
import AppBar from './components/Menu/appbar';
import HomePage from './page/home';
import WhyPage from './page/why';
import Footer from './page/footer';
import './App.css';
function App() {
  return (
    <div className="App">
    <AppBar />
      <div className="App-header">
        <HomePage />
        <WhyPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
