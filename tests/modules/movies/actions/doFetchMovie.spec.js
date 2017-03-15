import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doFetchMovie';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Retrieve movie', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with movie ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ movieId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MOVIE');
      expect(action.payload.movieId).to.equal(1);
      expect(action.payload.movie).to.be.an('object');
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['7094']);
    });
  });
});
