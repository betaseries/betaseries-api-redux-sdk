import latestEpisodesReducer
  from '../../../../lib/modules/shows/reducers/latestEpisodes';
import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

const actionFile = '../lib/modules/shows/actions/doFetchLatestEpisode';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Retrieve latest episode of the show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_LATEST_EPISODE');
      expect(action.payload.showId).to.equal(1);
      expect(action.payload.episode).to.be.an('object');
    });

    it('validate latestEpisodes reducer', () => {
      const stateLatestEpisodesReducer = latestEpisodesReducer(
        undefined,
        action
      );
      expect(stateLatestEpisodesReducer).to.deep.equal({ 1: 239475 });
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(Object.keys(stateEpisodesReducer)).to.deep.equal(['239475']);
    });
  });
});
