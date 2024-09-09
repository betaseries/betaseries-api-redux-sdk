import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
import membersEpisodesToSeeReducer
  from '../../../../lib/modules/shows/reducers/membersEpisodesToSee';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doMarkEpisodeAsRewatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Mark episode as rewatched', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with episode already exist on reducer state', () => {
    let actions;

    const store = mockStore({
      showsEpisodes: arrayToHash(episodesFixture)
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[5]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ id: 239480 }));
      actions = store.getActions();
    });

    it('validate many episode as rewatched action', () => {
      expect(actions[0].type).to.equal('MARK_MANY_EPISODE_AS_REWATCHED');
      expect(actions[0].payload.episodeIds).to.have.lengthOf(0);
      expect(actions[0].payload.seen).to.equal(true);
    });

    it('validate episodes reducer for many rewatched', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        actions[0]
      );
      actions[0].payload.episodeIds.forEach(episodeId => {
        expect(stateEpisodesReducer[episodeId].user.seen).to.deep.equal(true);
      });
    });

    it('validate episode as rewatched action', () => {
      expect(actions[1].type).to.equal('MARK_EPISODE_AS_REWATCHED');
      expect(actions[1].payload.id).to.deep.equal(239480);
      expect(actions[1].payload.episode).to.be.an('object');
      expect(actions[1].payload.seen).to.equal(true);
    });
  });

  describe('call api with bulk equal false', () => {
    let action;

    const store = mockStore({
      showsEpisodes: arrayToHash(episodesFixture),
      showsMembersEpisodesToSee: { 1: [239475, 239476, 239477, 239478] }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ id: 239475, bulk: false }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('MARK_MANY_EPISODE_AS_REWATCHED');
      expect(action.payload.episodeIds).to.deep.equal([239475]);
      expect(action.payload.seen).to.equal(true);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(
        stateEpisodesReducer[action.payload.episodeIds[0]].user.seen
      ).to.deep.equal(true);
    });

    it('validate membersEpisodesToSee reducer', () => {
      const stateMembersEpisodesToSeeReducer = membersEpisodesToSeeReducer(
        store.getState().showsMembersEpisodesToSee,
        action
      );

      expect(stateMembersEpisodesToSeeReducer[1]).to.deep.equal([
        239476,
        239477,
        239478
      ]);
    });
  });

  describe('call api with episode not existing on reducer state', () => {
    let action;

    const store = mockStore({
      showsEpisodes: arrayToHash(episodesFixture)
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[5]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ id: 23948056 }));
      action = store.getActions()[0];
    });

    it('validate episode as rewatched action', () => {
      expect(action.type).to.equal('MARK_EPISODE_AS_REWATCHED');
      expect(action.payload.id).to.deep.equal(23948056);
      expect(action.payload.seen).to.equal(true);
    });

    it("validate episodes reducer for mark episode as rewatched not changed and don't have episode", () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(stateEpisodesReducer[23948056]).to.equal(undefined);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(12);
    });
  });
});
