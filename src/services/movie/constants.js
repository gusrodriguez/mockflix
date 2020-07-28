export const API_KEY = 'd5a6770df9b56436e6aa6353271ab3de';
export const CONFIGURATION_ENDPOINT = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;
export const IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8JsdcDwAEgQGIMI7xEwAAAABJRU5ErkJggg==';
export const EXPECTED_RESULTS_AMOUNT = 80;
export const getMoviesEndpoint = (query, page) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`;
export const getGenresEndpoint = genre => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&with_genres=${genre}`
export const NUMBER_OF_SUGGESTIONS = 10;
