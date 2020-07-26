import { handleActions } from 'redux-actions';
import { ResultState, StatusType } from '../../types';

export const DEFAULT_STATE: ResultState = {
  results: [],
  error: '',
  status: StatusType.OFF,
  backgroundLoaded: false,
};

export default (handleActions({
  FINISH_LOADING_RESULTS: (state, { payload: { results } } ) => ({
    ...state,
    results,
    status: 'INPUT',
  }),
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
  }),
  ERROR_LOADING_RESULTS: (state, { payload: { error } }) => ({
    ...state,
    error,
  }),
},
  DEFAULT_STATE
));
