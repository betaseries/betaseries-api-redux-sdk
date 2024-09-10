import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doUnmarkSeasonAsRewatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Unmark season as rewatched', () => {
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
      showsEpisodes: arrayToHash(episodesFixture),
      showsSeasons: []
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture,
        seasons: []
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 481, season: 1 }));
      action = store.getActions()[0];
    });

    it('validate many episode as unwatched action', () => {
      expect(action.type).to.equal('UNMARK_SEASON_AS_REWATCHED');
      expect(action.payload.seasons).to.be.an('array');
    });
  });
});
