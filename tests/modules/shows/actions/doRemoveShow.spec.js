import showsReducer from '../../../../lib/modules/shows/reducers/shows';
import membersReducer from '../../../../lib/modules/shows/reducers/members';
import favoritesReducer from '../../../../lib/modules/shows/reducers/favorites';

const actionFile = '../lib/modules/shows/actions/doRemoveShow';
const showsFixture = require('../../../fixtures/shows.json');

describe('Remove a show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => promise }
    }).default;
  }

  describe('call api with show already exist on reducer state', () => {
    let action;

    const store = mockStore({
      shows: {
        [showsFixture[0].id]: showsFixture[0]
      },
      showsMembers: {
        1: [10212, 10254, 10255]
      },
      showsFavorites: {
        1: [10212, 10270, 10271]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: showsFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 10212 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('REMOVE_SHOW');
      expect(action.payload.showId).to.equal(10212);
      expect(action.payload.inAccount).to.equal(false);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
      expect(stateShowsReducer[10212].in_account).to.deep.equal(false);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(
        store.getState().showsMembers,
        action
      );
      expect(stateMembersReducer[1]).to.deep.equal([10254, 10255]);
    });

    it('validate favorites reducer', () => {
      const stateFavoritesReducer = favoritesReducer(
        store.getState().showsFavorites,
        action
      );
      expect(stateFavoritesReducer[1]).to.deep.equal([10270, 10271]);
    });
  });
});
