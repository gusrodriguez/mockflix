import { connect } from 'react-redux';
import Search from './presentational';
import {  AppState, AppThunkDispatch } from '../../types';

import {
  loadBackground,
  loadSuggestions,
  toggleActivateSearch,
} from './actions';
import { AnyAction } from 'redux';

export const mapStateToProps = (state: AppState) => {
  const { search : { backgroundLoaded, isSearchActive } } = state;
  return ({
    backgroundLoaded,
    isSearchActive,
  })
}

export const actions = (dispatch : AppThunkDispatch) => ({
  onLoadBackground: (): void => dispatch(loadBackground()),
  onLoadSuggestions: (query: string): Promise<Array<string>>  => dispatch(loadSuggestions(query)),
  onActivateSearch: (isSearchActive: boolean): AnyAction => dispatch(toggleActivateSearch(isSearchActive)),
});

export default connect(mapStateToProps, actions)(Search);
