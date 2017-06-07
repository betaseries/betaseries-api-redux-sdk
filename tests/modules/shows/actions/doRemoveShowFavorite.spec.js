import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doRemoveShowFavorite';
const showsFixture = require('../../../fixtures/shows.json');

describe('Remove a show from favorites', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => promise }
    }).default;
  }

  describe('call api with a show removed from favorites', () => {
    let action;

    const store = mockStore({
      shows: {
        [showsFixture[0].id]: showsFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: showsFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 1 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('REMOVE_SHOW_FAVORITE');
      expect(action.payload.showId).to.equal(1);
      expect(action.payload.show).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
    });
  });
});
