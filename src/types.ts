import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

// Services
export type MovieApiResult = {
  genre_ids: Array<number>,
  poster_path: string,
  title: string,
}

export interface MovieService {
  axios: any;
  relatedMovies: Array<Movie>;
  loadMovies: (query: string) => Promise<Array<Movie>>;
  loadSuggestions: (query: string) => Promise<Array<string>>;
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
  isSearchActive: boolean,
}

export type ResultState = {
  results: Array<Movie>,
  error: string,
  status: string,
  backgroundLoaded: boolean,
}

export type AppState = {
  search: SearchState,
  movies: ResultState,
}

// Redux-thunk types
export type ExtraArgument = {
  movieService: MovieService
}

export type AppThunk<T> = ThunkAction<T, AppState, ExtraArgument, AnyAction>

export type AppThunkDispatch = ThunkDispatch<AppState, ExtraArgument, AnyAction>;

// States
export type SuggestionsState = {
  value: string,
  suggestions: Array<string>,
}

export type DebounceState = {
  isDebounced: boolean,
  fn: (({ value }) => Promise<void>) | null,
}

// Html Elements
export interface EventTargetWithInnerText extends EventTarget {
  innerText: string,
}

export interface MouseEventWithCustomTarget<HtmlInputElement> extends React.MouseEvent<HtmlInputElement> {
  target: EventTargetWithInnerText,
}
