export const API_KEY = 'd5a6770df9b56436e6aa6353271ab3de';
export const CONFIGURATION_ENDPOINT = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;
export const PLACEHOLDER_URL = 'https://via.placeholder.com/300x382?text=Image%20Unavailable';
export const GENERIC_QUERY = 'action';
export const getMoviesEndpoint = (query, page) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`;
