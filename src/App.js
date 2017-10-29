import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Redux Form - Front Club</h1>
    </header>
    <Link to="/" />
    <Route exact path="/" component={Home} />
  </div>
)

export default App;
