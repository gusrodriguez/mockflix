import { createAction } from 'redux-actions';

export const finishLoadingResults = createAction('FINISH_LOADING_RESULTS', results => ({ results }));
export const errorLoadingResults = createAction('ERROR_LOADING_RESULTS', () => undefined);

export const loadResults = query =>
  async(dispatch, getState, { movieService }) => {
   try {
     const results = await movieService.loadMovies(query);
     dispatch(finishLoadingResults(results));
     return results;
   } catch {
      dispatch(errorLoadingResults());
   }
  }
