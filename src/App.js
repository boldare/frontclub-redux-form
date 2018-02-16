import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';

import Home from './pages/home'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <video id="smoke" autoPlay loop>
        <source src="http://www.elementfinder.info/vid/smoke.mp4" type="video/mp4" />
        <source src="http://www.elementfinder.info/vid/smoke.webm" type="video/webm" />
        <source src="http://www.elementfinder.info/vid/smoke.ogv" type="video/ogg" />
      </video>
      <h1 className="App-title">redUx Form</h1>
    </header>
    <nav>
      <NavLink exact to="/" className="link" activeClassName="is-active">
        <Button>
          Home
        </Button>
      </NavLink>
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </div>
)

export default App;
