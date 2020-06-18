import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Index } from './pages';


const App = () => (
  <Switch>
    <Route to="/" exact component={Index} />
  </Switch>
);

export default App;
