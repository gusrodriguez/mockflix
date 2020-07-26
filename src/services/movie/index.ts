import {
  getMoviesEndpoint,
  getGenresEndpoint,
  CONFIGURATION_ENDPOINT,
  EXPECTED_RESULTS_AMOUNT,
} from "./constants";

class MovieService {
  axios: any;
  relatedMovies: Array<Movie>
  constructor({ axios }: any) {
    this.axios = axios;
    this.relatedMovies = [];
  }

  async loadMovies(query: string): Promise<Array<Movie>> {
    const [configuration, movies] = await Promise.all([
      this.axios(CONFIGURATION_ENDPOINT),
      this.axios(getMoviesEndpoint(query, 1))
    ]);

    const {
      data: {
        images: {
          base_url: baseUrl
        },
      },
    } = configuration;

    const { data: { results } } = movies;

    // Get the genre of the first result and request more movies to fill pages of the carousels.
    const [firstResult] = results;
    const [genre] = firstResult.genre_ids;

    // Fill the related movies array
    const { data: { results: relatedResults } } = await this.axios(getGenresEndpoint(genre));

    this.relatedMovies = [...this.mapResultsToMovies(relatedResults, baseUrl)];

    const moviesResults = this.mapResultsToMovies(results, baseUrl);

    // If the api responded with less than the expected amount of results, then balance borrowing from related movies.
    const resultsDifference = EXPECTED_RESULTS_AMOUNT - moviesResults.length;

    const allResults = resultsDifference > 0 ? [...moviesResults, ...this.borrowFromRelatedMovies(resultsDifference)] : moviesResults;

    return allResults.slice(0, EXPECTED_RESULTS_AMOUNT);
  }

  // Related movies will always have an image. Notice that the API could send results with no image.
  mapResultsToMovies(results: Array<MovieApiResult>, baseUrl: string): Array<Movie>  {
    return results
      .filter((result: MovieApiResult) => result.poster_path)
      .map(filteredResult => ({
        ...filteredResult,
        imgSource: `${baseUrl}w500${filteredResult.poster_path}`,
      }));
  }

  borrowFromRelatedMovies(amount: number): Array<Movie> {
    return this.relatedMovies.splice(0, amount);
  }
}

export default MovieService;

