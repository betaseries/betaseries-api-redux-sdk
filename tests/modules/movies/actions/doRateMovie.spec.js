import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doRateMovie';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Rate movie', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without movies on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ movieId: 7094, note: 4 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('RATE_MOVIE');
      expect(action.payload.movieId).to.equal(7094);
      expect(action.payload.note).to.equal(4);
      expect(action.payload.movie).to.be.an('object');
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.have.lengthOf(0);
    });
  });

  describe('call api with movie already exist on reducer state', () => {
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
      action = await store.dispatch(
        actionToDispatch({ movieId: 7094, note: 3 })
      );
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(store.getState().movies, action);
      expect(Object.keys(stateMoviesReducer)).to.have.lengthOf(1);
    });
  });
});
