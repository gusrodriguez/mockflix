import { createAction } from 'redux-actions';
import backgroundImage from '../../assets/images/movies.jpg'
import { preloadImage } from '../../helpers';

export const finishLoadingResults = createAction('FINISH_LOADING_RESULTS', results => ({ results }));
export const errorLoadingResults = createAction('ERROR_LOADING_RESULTS', () => undefined);
export const finishLoadingBackground = createAction('FINISH_LOADING_BACKGROUND', () => undefined);

export const loadResults = query =>
  async (dispatch, getState, { movieService }) => {
    try {
      const results = await movieService.loadMovies(query);
      dispatch(finishLoadingResults(results));
      return results;
    } catch {
      dispatch(errorLoadingResults());
    }
  }

export const loadBackground = () =>
  async (dispatch) => {
    await preloadImage(backgroundImage);
    dispatch(finishLoadingBackground());
  }
