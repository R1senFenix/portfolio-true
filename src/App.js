import React from 'react';
import Navbar from './components/common/Navbar';
import Index from './components/index/Index';
import Footer from './components/common/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-sm content">
        <Index />
        <Footer />
      </div>
    </div>
  );
}

export default App;
