import { handleActions } from 'redux-actions';
import * as strings from './strings';

export const DEFAULT_STATE = {
  results: [],
  error: null,
};

export default (handleActions({
  FINISH_LOADING_RESULTS: (state, { payload: { results } } ) => ({
    ...state,
    results,
  }),
  ERROR_LOADING_RESULTS: state => ({
    ...state,
    error: strings.ERROR_LOADING_RESULTS,
  }),
},
  DEFAULT_STATE
));
