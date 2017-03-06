import favoritesReducer from '../../../../lib/modules/movies/reducers/favorites';
import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doFetchFavoriteMovies';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Retrieve favorite movies of the member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire
      .noCallThru()
      .load(actionFile, {
        '../../../utils/fetch/ApiFetch': { get: () => promise },
      }).default;
  }

  describe('call api with member ID', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({
      movies: moviesFixture.slice(0, 2),
    }));

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_FAVORITE_MOVIES');
      expect(action.payload.memberId).to.equal(1);
      expect(action.payload.movies).to.have.lengthOf(2);
    });

    it('validate favorites reducer', () => {
      const stateFavoritesReducer = favoritesReducer(undefined, action);
      expect(stateFavoritesReducer).to.deep.equal({ 1: [30452, 13494] });
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['13494', '30452']);
    });
  });
});
