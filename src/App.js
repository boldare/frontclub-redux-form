import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';

import Home from './pages/home'
import Validation from './pages/validation'
import InitialValues from './pages/initial'
import ArrayForm from './pages/array'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src="http://frontclub.pl/1226c02f1436272e162b73cf3f64dd94.svg" alt="FC logo" />
      <h1 className="App-title">Redux Form - Front Club</h1>
    </header>
    <nav>
      <Button>
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
      </Button>
      <Button>
        <NavLink to="/validation" activeClassName="is-active">
          Validation
        </NavLink>
      </Button>
      <Button>
        <NavLink to="/initial-values" activeClassName="is-active">
          Initial Values
        </NavLink>
      </Button>
      <Button>
        <NavLink to="/array" activeClassName="is-active">
          Array form
        </NavLink>
      </Button>
    </nav>

    <Route exact path="/validation" component={Validation} />
    <Route path="/initial-values" component={InitialValues} />
    <Route path="/array" component={ArrayForm} />
    <Route exact path="/" component={Home} />
  </div>
)

export default App;
