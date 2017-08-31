import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doMarkEpisodeAsDownloaded';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Mark episode as downloaded', () => {
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
        episode: episodesFixture[5]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ episodeId: 239480 }));
      action = store.getActions()[0];
    });

    it('validate episode as downloaded action', () => {
      expect(action.type).to.equal('MARK_EPISODE_AS_DOWNLOADED');
      expect(action.payload.episodeId).to.deep.equal(239480);
      expect(action.payload.downloaded).to.equal(true);
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
      await store.dispatch(actionToDispatch({ episodeId: 23948056 }));
      action = store.getActions()[0];
    });

    it('validate episode as downloaded action', () => {
      expect(action.type).to.equal('MARK_EPISODE_AS_DOWNLOADED');
      expect(action.payload.episodeId).to.deep.equal(23948056);
      expect(action.payload.downloaded).to.equal(true);
    });

    it("validate episodes reducer for mark episode as downloaded not changed and don't have episode", () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(stateEpisodesReducer[23948056]).to.equal(undefined);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(12);
    });
  });
});
