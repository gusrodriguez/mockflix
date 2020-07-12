import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';
import results from './components/results/reducer';
import MovieService from './services/movie';

const reducers = combineReducers({
  movies: results,
});

const extraArgument = {
  movieService: new MovieService({ axios })
};

const middlewares = [
  thunk.withExtraArgument(extraArgument),
]

export default createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
