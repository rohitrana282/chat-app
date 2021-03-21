import React from 'react';
import { Route, Switch } from 'react-router';
import from './pages/Home'
import from './components/PrivateRoute'

import 'rsuite/dist/styles/rsuite-default.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <PrivateRoute path="/">
        <Home />  
      </PrivateRoute>
    </Switch>
  );
}

export default App;
