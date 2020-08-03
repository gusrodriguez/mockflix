import { handleActions } from 'redux-actions';
import { ResultState } from '../../types';
import {  StatusType } from '../../enums';

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
    status: StatusType.INPUT,
  }),
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
  }),
},
  DEFAULT_STATE
));
