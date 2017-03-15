import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doUpdateMovieState';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Update movie state', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

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
      await store.dispatch(actionToDispatch({ movieId: 7094, state: 2 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('UPDATE_MOVIE_STATE');
      expect(action.payload.movieId).to.equal(7094);
      expect(action.payload.state).to.equal(2);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(store.getState().movies, action);
      expect(Object.keys(stateMoviesReducer)).to.have.lengthOf(1);
      expect(stateMoviesReducer[7094].auth_user.status).to.deep.equal(2);
    });
  });
});
