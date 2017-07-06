import showsReducer from '../../../../lib/modules/shows/reducers/shows';
import membersReducer from '../../../../lib/modules/shows/reducers/members';
import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

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
        1: [{ id: 10212 }, { id: 10254 }, { id: 10255 }]
      },
      showsEpisodes: {
        1: {
          id: 1,
          show: { id: 10212, in_account: true },
          user: { seen: true }
        },
        2: {
          id: 2,
          show: { id: 10212, in_account: true },
          user: { seen: true }
        },
        3: {
          id: 3,
          show: { id: 10400, in_account: false },
          user: { seen: false }
        },
        4: {
          id: 3,
          show: { id: 10400, in_account: true },
          user: { seen: true }
        }
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: {
          ...showsFixture[0],
          in_account: false
        }
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 10212 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('REMOVE_SHOW');
      expect(action.payload.showId).to.equal(10212);
      expect(action.payload.show).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(
        store.getState().showsMembers,
        action
      );

      expect(stateMembersReducer[1].map(show => show.id)).to.deep.equal([
        10254,
        10255
      ]);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(stateEpisodesReducer[1].show.in_account).to.deep.equal(false);
      expect(stateEpisodesReducer[1].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[2].show.in_account).to.deep.equal(false);
      expect(stateEpisodesReducer[2].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[3].show.in_account).to.deep.equal(false);
      expect(stateEpisodesReducer[3].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[4].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[4].user.seen).to.deep.equal(true);
    });
  });
});
