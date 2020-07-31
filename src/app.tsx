import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import { StyledBody } from './components/global-styled';
import store from './store';
import Search from './components/search';
import Results from './components/results';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <StyledBody />
        <Router history={history}>
          <Switch>
            <Route path="/results/:query" component={Results} />
            <Route path="/" component={Search} />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  )
};

export default App;
