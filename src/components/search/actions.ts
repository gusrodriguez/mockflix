import { createAction } from 'redux-actions';
import backgroundImage from '../../assets/images/movies.jpg'
import { preloadImage } from '../../helpers';
import { AppThunk } from '../../types';

export const finishLoadingBackground = createAction('FINISH_LOADING_BACKGROUND', () => undefined);
export const toggleActivateSearch = createAction('TOGGLE_ACTIVATE_SEARCH', (isSearchActive: boolean) => ({ isSearchActive }));

export const loadBackground = (): AppThunk<void> =>
  async(dispatch) => {
    await preloadImage(backgroundImage);
    dispatch(finishLoadingBackground());
  }

export const loadSuggestions = (query: string): AppThunk<Promise<Array<string>>> =>
  async(dispatch, getState, { movieService }) => movieService.loadSuggestions(query);
