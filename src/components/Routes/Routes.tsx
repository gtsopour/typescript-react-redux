import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../containers/Home/Home';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}
