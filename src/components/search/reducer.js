import { handleActions } from 'redux-actions';

import { StatusType } from '../../types';

export const DEFAULT_STATE = {
  backgroundLoaded: false,
  status: StatusType.OFF,
};

export default (handleActions({
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
    status: StatusType.INPUT,
  }),
},
  DEFAULT_STATE
));
