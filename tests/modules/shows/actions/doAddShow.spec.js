import showsReducer from '../../../../lib/modules/shows/reducers/shows';
import membersReducer from '../../../../lib/modules/shows/reducers/members';
import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

const actionFile = '../lib/modules/shows/actions/doAddShow';
const showsFixture = require('../../../fixtures/shows.json');

describe('Add a new show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with show already exist on reducer state', () => {
    let action;

    const store = mockStore({
      shows: {
        [showsFixture[0].id]: showsFixture[0]
      },
      showsEpisodes: {
        1: {
          id: 1,
          show: { id: 10212, in_account: false },
          user: { seen: true }
        },
        2: {
          id: 2,
          show: { id: 10212, in_account: false },
          user: { seen: false }
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
        show: showsFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 10212 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('ADD_SHOW');
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
      expect(stateMembersReducer[1]).to.have.lengthOf(1);
      expect(stateMembersReducer[1][0]).to.have.all.keys('id', 'infos');
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(stateEpisodesReducer[1].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[1].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[2].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[2].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[3].show.in_account).to.deep.equal(false);
      expect(stateEpisodesReducer[3].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[4].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[4].user.seen).to.deep.equal(true);
    });
  });

  describe('call api with show already exist on reducer state with episodeId', () => {
    let actions;

    const store = mockStore({
      shows: {
        [showsFixture[0].id]: showsFixture[0]
      },
      showsEpisodes: {
        1: {
          id: 1,
          season: 1,
          episode: 1,
          show: { id: 10212, in_account: false },
          user: { seen: false }
        },
        2: {
          id: 2,
          season: 2,
          episode: 3,
          show: { id: 10212, in_account: false },
          user: { seen: false }
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
        show: showsFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 10212, episodeId: 2 }));
      actions = store.getActions();
    });

    it('validate action', () => {
      expect(actions[0].type).to.equal('ADD_SHOW');
      expect(actions[0].payload.showId).to.equal(10212);
      expect(actions[0].payload.show).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(
        store.getState().shows,
        actions[0]
      );
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(
        store.getState().showsMembers,
        actions[0]
      );
      expect(stateMembersReducer[1]).to.have.lengthOf(1);
      expect(stateMembersReducer[1][0]).to.have.all.keys('id', 'infos');
    });

    it('validate episodes reducer on ADD_SHOW action response', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        actions[0]
      );

      expect(stateEpisodesReducer[1].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[1].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[2].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[2].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[3].show.in_account).to.deep.equal(false);
      expect(stateEpisodesReducer[3].user.seen).to.deep.equal(false);

      expect(stateEpisodesReducer[4].show.in_account).to.deep.equal(true);
      expect(stateEpisodesReducer[4].user.seen).to.deep.equal(true);
    });

    it('validate many episode as watched action', () => {
      expect(actions[1].type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
      expect(actions[1].payload.episodeIds).to.have.lengthOf(2);
      expect(actions[1].payload.seen).to.equal(true);
    });

    it('validate episodes reducer on MARK_MANY_EPISODE_AS_WATCHED action response', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        actions[1]
      );

      expect(stateEpisodesReducer[1].user.seen).to.deep.equal(true);
      expect(stateEpisodesReducer[2].user.seen).to.deep.equal(true);
      expect(stateEpisodesReducer[3].user.seen).to.deep.equal(false);
      expect(stateEpisodesReducer[4].user.seen).to.deep.equal(true);
    });
  });
});
