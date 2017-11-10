import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './pages/home'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Redux Form - Front Club</h1>
    </header>
    <nav>
      <NavLink exact to="/" className="link" activeClassName="is-active">Home</NavLink>
      <NavLink to="/validation" className="link" activeClassName="is-active">Validation</NavLink>
      <NavLink to="/initial-values" className="link" activeClassName="is-active">Initial Values</NavLink>
    </nav>
    {/* <Route path="/validation" component={Validation} /> */}
    {/* <Route path="/initial-values" component={InitialValues} /> */}
    <Route exact path="/" component={Home} />
  </div>
)

export default App;
