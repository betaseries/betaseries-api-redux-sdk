import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doMarkSeasonAsWatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Mark season as watched', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with episode already exist on reducer state', () => {
    let action;

    const store = mockStore({
      showsEpisodes: arrayToHash(episodesFixture)
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 481, season: 1 }));
      action = store.getActions()[0];
    });

    it('validate many episode as watched action', () => {
      expect(action.type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
      expect(action.payload.episodeIds).to.have.lengthOf(12);
      expect(action.payload.seen).to.equal(true);
    });

    it('validate episodes reducer for many watched', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      action.payload.episodeIds.forEach(episodeId => {
        expect(stateEpisodesReducer[episodeId].user.seen).to.deep.equal(true);
      });
    });
  });

  describe('call api with episode not existing on reducer state', () => {
    let action;

    const store = mockStore({
      showsEpisodes: []
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 481, season: 1 }));
      action = store.getActions()[0];
    });

    it('validate many episode as watched action', () => {
      expect(action.type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
      expect(action.payload.episodeIds).to.have.lengthOf(12);
      expect(action.payload.seen).to.equal(true);
    });

    it("validate episodes reducer for season watched not changed and don't have episodes", () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(0);
    });
  });
});
