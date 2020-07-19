import { handleActions } from 'redux-actions';

export const DEFAULT_STATE = {
  backgroundLoaded: false,
  status: 'OFF',
};

export default (handleActions({
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
    status: 'INPUT',
  }),
},
  DEFAULT_STATE
));
