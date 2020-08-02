import { handleActions } from 'redux-actions';
import { ResultState } from '../../types';
import {  StatusType, RESULT_STATUS } from '../../enums';

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
    status: RESULT_STATUS.INPUT,
  }),
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
  }),
},
  DEFAULT_STATE
));
