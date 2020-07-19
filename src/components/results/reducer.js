import { handleActions } from 'redux-actions';
import * as strings from './strings';

export const DEFAULT_STATE = {
  results: [],
  error: null,
  backgroundLoaded: false,
  status: 'OFF',
};

export default (handleActions({
  FINISH_LOADING_RESULTS: (state, { payload: { results } } ) => ({
    ...state,
    results,
    status: 'INPUT',
  }),
  ERROR_LOADING_RESULTS: state => ({
    ...state,
    error: strings.ERROR_LOADING_RESULTS,
  }),
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
  }),
},
  DEFAULT_STATE
));
