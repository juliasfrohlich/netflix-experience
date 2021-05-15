
const API_KEY = '46350fb6f9e44b3cec023baa2c31e76b';

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&witch_networks=123`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  fetchActionMovies: `/discover/movie?apy_key=${API_KEY}&witch_genres=28` ,
  fetchComedyMovies: `/discover/movie?apy_key=${API_KEY}&witch_genres=35`,
  fetchHorrorMovies: `/discover/movie?apy_key=${API_KEY}&witch_genres=27`,
  fetchRomanceMovies: `/discover/movie?apy_key=${API_KEY}&witch_genres=10749`,
  fetchDocumentaries: `/discover/movie?apy_key=${API_KEY}&witch_genres=99`,
}

export default requests;