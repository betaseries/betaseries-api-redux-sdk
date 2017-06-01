import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
import membersEpisodesToSeeReducer
  from '../../../../lib/modules/shows/reducers/membersEpisodesToSee';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doMarkEpisodeAsWatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Mark episode as watched', () => {
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
      await store.dispatch(actionToDispatch({ episodeId: 239480 }));
      actions = store.getActions();
    });

    it('validate many episode as watched action', () => {
      expect(actions[0].type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
      expect(actions[0].payload.episodeIds).to.have.lengthOf(6);
      expect(actions[0].payload.seen).to.equal(true);
    });

    it('validate episodes reducer for many watched', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        actions[0]
      );
      actions[0].payload.episodeIds.forEach(episodeId => {
        expect(stateEpisodesReducer[episodeId].user.seen).to.deep.equal(true);
      });
    });

    it('validate episode as watched action', () => {
      expect(actions[1].type).to.equal('MARK_EPISODE_AS_WATCHED');
      expect(actions[1].payload.episodeId).to.deep.equal(239480);
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
      await store.dispatch(
        actionToDispatch({ episodeId: 239475, bulk: false })
      );
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
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

      console.log(stateMembersEpisodesToSeeReducer);

      expect(stateMembersEpisodesToSeeReducer[1]).to.deep.equal([
        239476,
        239477,
        239478
      ]);
    });
  });
});
