import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doUnmarkEpisodeAsRewatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Unmark episode as rewatched', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => promise }
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
      await store.dispatch(actionToDispatch({ id: 239480 }));
      action = store.getActions()[0];
    });

    it('validate unmark episode as rewatched action', () => {
      expect(action.type).to.equal('UNMARK_EPISODE_AS_REWATCHED');
      expect(action.payload.episode.id).to.deep.equal(239480);
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
      await store.dispatch(actionToDispatch({ id: 239480 }));
      action = store.getActions()[0];
    });

    it('validate unmark episode as rewatched action', () => {
      expect(action.type).to.equal('UNMARK_EPISODE_AS_REWATCHED');
      expect(action.payload.episode.id).to.deep.equal(239480);
    });
  });
});
