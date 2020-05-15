import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Index from './components/index/Index';
import Contact from './components/contact/Contact';
import Portfolio from './components/folio/Portfolio';
import Footer from './components/common/Footer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container-sm content">
          <Switch>
            <Route path="/home" component={Index} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/" component={Index} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
