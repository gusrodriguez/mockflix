import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import history from './history';
import { StyledBody } from './components/global-styled';
import store from './store';
import Search from './components/search';
import Results from './components/results';
import NotFound from './components/not-found'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <StyledBody />
        <Router history={history}>
          <Switch>
            <Route exact path="/results/:query" component={Results} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/">
              <Redirect to="/search" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  )
};

export default App;
