import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doAddMovieFavorite';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Add a movie to favorites', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with new movie added to favorites', () => {
    let action;

    const store = mockStore({
      movies: {
        [moviesFixture[0].id]: moviesFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ movieId: 10212 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('ADD_MOVIE_FAVORITE');
      expect(action.payload.movieId).to.equal(10212);
      expect(action.payload.movie).to.be.an('object');
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(store.getState().movies, action);
      expect(Object.keys(stateMoviesReducer)).to.have.lengthOf(1);
    });
  });
});
