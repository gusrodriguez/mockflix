import { createAction } from 'redux-actions';
import backgroundImage from '../../assets/images/movies.jpg'
import { preloadImage } from '../../helpers';
import { AppThunk, Movie } from '../../types';
import * as strings from './strings';

export const finishLoadingResults = createAction('FINISH_LOADING_RESULTS', (results: Array<Movie>) => ({ results }));
export const errorLoadingResults = createAction('ERROR_LOADING_RESULTS', (error: string) => { error });
export const finishLoadingBackground = createAction('FINISH_LOADING_BACKGROUND', () => undefined);

export const loadResults = (query: string): AppThunk =>
  async(dispatch, getState, { movieService }) => {
    try {
      const results = await movieService.loadMovies(query);
      dispatch(finishLoadingResults(results));
      return results;
    } catch {
      dispatch(errorLoadingResults(strings.ERROR_LOADING_RESULTS));
    }
  }

export const loadBackground = (): AppThunk =>
  async (dispatch) => {
    await preloadImage(backgroundImage);
    dispatch(finishLoadingBackground());
  }
