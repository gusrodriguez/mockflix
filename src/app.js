import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Search from './components/search';

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  )
};

export default App;
