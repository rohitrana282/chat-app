import React from 'react';
import { Route, Switch } from 'react-router';

import 'rsuite/dist/styles/rsuite-default.css';
import SignIn from './pages/SignIn';
import './styles/main.scss';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default App;
