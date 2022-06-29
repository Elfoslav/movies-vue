import api from '../../api';

const defaultValues = {
  movie: null,
  movies: [],
  totalResults: 0,
  serverError: '',
};

export default {
  namespaced: true,
  state: { ...defaultValues },
  getters: {
    movie: (state) => state.movie,
    movies: (state) => state.movies,
    totalResults: (state) => state.totalResults,
    serverError: (state) => state.serverError,
  },
  actions: {
    async getMovie(context, movieId) {
      const result = await api.get('', {
        params: {
          i: movieId,
        },
      });
      context.commit('setMovie', result?.data);
    },
    async searchMovies(context, searchString) {
      const result = await api.get('', {
        params: {
          s: searchString,
        },
      });

      if (result.data.Error) {
        context.commit('setServerError', result.data.Error);
      }

      context.commit('setTotalResults', parseInt(result.data.totalResults));
      context.commit('setMovies', result?.data?.Search);
    },
  },
  mutations: {
    setMovie(state, data) {
      state.movie = data || defaultValues.movie;
    },
    setMovies(state, data) {
      state.movies = data || defaultValues.movies;
    },
    setTotalResults(state, data) {
      state.totalResults = data || defaultValues.totalResults;
    },
    setServerError(state, data) {
      state.serverError = data || defaultValues.serverError;
    },
  },
}
  