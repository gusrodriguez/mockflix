import { createAction } from 'redux-actions';
import backgroundImage from '../../assets/images/movies.jpg'
import { preloadImage } from '../../helpers';
import { AppThunk, Movie } from '../../types';

export const finishLoadingResults = createAction('FINISH_LOADING_RESULTS', (results: Array<Movie>) => ({ results }));
export const errorLoadingResults = createAction('ERROR_LOADING_RESULTS', (error: string) => { error });
export const finishLoadingBackground = createAction('FINISH_LOADING_BACKGROUND', () => undefined);

export const loadResults = (query: string): AppThunk<void> =>
  async(dispatch, getState, { movieService }) => {
    try {
      const results = await movieService.loadMovies(query);
      dispatch(finishLoadingResults(results));
      return results;
    } catch {
      // If the api does't find results, it will raise an error.
      dispatch(finishLoadingResults([]));
    }
  }

export const loadBackground = (): AppThunk<void> =>
  async (dispatch) => {
    await preloadImage(backgroundImage);
    dispatch(finishLoadingBackground());
  }
