import { handleActions } from 'redux-actions';

import { StatusType } from '../../enums';

export const DEFAULT_STATE = {
  backgroundLoaded: false,
  status: StatusType.OFF,
  isSearchActive: false,
};

export default (handleActions({
  FINISH_LOADING_BACKGROUND: state => ({
    ...state,
    backgroundLoaded: true,
    status: StatusType.INPUT,
  }),
  TOGGLE_ACTIVATE_SEARCH: (state, { payload: { isSearchActive } }) => {
    return ({
    ...state,
    isSearchActive,
  })
},
},
  DEFAULT_STATE
));
