import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Enums
export enum StatusType {
  OFF = 'OFF',
  INPUT = 'INPUT',
};

// Services
export type MovieApiResult = {
  genre_ids: Array<number>,
  poster_path: string,
}

export interface MovieService {
  axios: any;
  relatedMovies: Array<Movie>;
  loadMovies: (query: string) => Promise<Array<Movie>>;
}

export type Movie = {
  genre_ids: Array<number>,
  poster_path: string,
  imgSource: string,
}

// States
export type SearchState = {
  status: string,
  backgroundLoaded: boolean,
}

export type ResultState = {
  results: Array<Movie>,
  error: string,
  status: string,
  backgroundLoaded: boolean,
}

export type AppState = {
  search: SearchState,
  movies:ResultState,
}

// Redux-thunk types
type ExtraArgument = {
  movieService: MovieService
}

export type AppThunk = ThunkAction<void, AppState, ExtraArgument, AnyAction>
