import {
  getMoviesEndpoint,
  CONFIGURATION_ENDPOINT,
  GENERIC_QUERY,
  PLACEHOLDER_URL,
} from "./constants";

class MovieService {
  constructor({ axios }) {
    this.axios = axios;
  }

  async loadMovies(query) {
    const [configuration, movies] = await Promise.all([
      this.axios(CONFIGURATION_ENDPOINT),
      this.axios(getMoviesEndpoint('avengers',1))
    ]);

    const {
      data: {
        images: {
          base_url: baseUrl
        },
      },
    } = configuration;

    const { data: { results } } = movies;

    const aa = results.map(result => ({
      ...result,
      imgSource:  result.poster_path ? `${baseUrl}w500${result.poster_path}` : PLACEHOLDER_URL,
    }))
    .concat(await this.randomizeResults(baseUrl));
    debugger;
    return aa;
  }

  // This method arbitrarily fills the result set with a random page of the results retrieved with a generic query search term.
  // In real life, in here there should be some kind of recommendations algorithm.
  async randomizeResults(baseUrl) {
    const maxPage = 15;
    const minPage = 1;
    const randomPAge =  Math.floor(Math.random() * (maxPage - minPage + 1)) + minPage;

    const { data: { results } } = await this.axios(getMoviesEndpoint('action', randomPAge));
    debugger;

    return results.map(result => ({
      ...result,
      imgSource: result.poster_path ? `${baseUrl}w500${result.poster_path}` : PLACEHOLDER_URL,
    }));
  }
}

export default MovieService;
