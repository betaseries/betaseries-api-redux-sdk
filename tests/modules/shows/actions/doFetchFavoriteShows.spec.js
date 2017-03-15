import favoritesReducer from '../../../../lib/modules/shows/reducers/favorites';
import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doFetchFavoriteShows';
const showsFixture = require('../../../fixtures/shows.json');

describe('Retrieve favorite shows of the member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with member ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_FAVORITE_SHOWS');
      expect(action.payload.memberId).to.equal(1);
      expect(action.payload.shows).to.have.lengthOf(2);
    });

    it('validate favorites reducer', () => {
      const stateFavoritesReducer = favoritesReducer(undefined, action);
      expect(stateFavoritesReducer).to.deep.equal({ 1: [10212, 982] });
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['982', '10212']);
    });
  });
});
