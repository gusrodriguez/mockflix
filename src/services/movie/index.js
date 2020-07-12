import { MOVIES_ENDPOINT, CONFIGURATION_ENDPOINT } from "./constants";

class MovieService {
  constructor({ axios }) {
    this.axios = axios;
  }

  async loadMovies() {
    const [configuration, movies] = await Promise.all([
      this.axios(CONFIGURATION_ENDPOINT),
      this.axios(MOVIES_ENDPOINT)
    ]);

    const {
      data: {
        images: {
          base_url: baseUrl
        },
      },
    } = configuration;

    const { data: { results } } = movies;

    return results.map(result => ({
      ...result,
      imgSource: `${baseUrl}w500${result.poster_path}`
    }));
  }
}

export default MovieService;
