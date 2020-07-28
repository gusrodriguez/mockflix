import { createAction } from 'redux-actions';
import backgroundImage from '../../assets/images/movies.jpg'
import { preloadImage } from '../../helpers';
import { AppThunk } from '../../types';

export const finishLoadingBackground = createAction('FINISH_LOADING_BACKGROUND', () => undefined);

export const loadBackground = (): AppThunk =>
  async(dispatch) => {
    await preloadImage(backgroundImage);
    dispatch(finishLoadingBackground());
  }

export const loadSuggestions = (query: string): AppThunk =>
  async(dispatch, getState, { movieService }) => movieService.loadSuggestions(query);
