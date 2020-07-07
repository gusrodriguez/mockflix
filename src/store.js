import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import search from './components/search/reducer';

const reducers = combineReducers({
  search,
});

export default createStore(reducers, applyMiddleware(thunk));
