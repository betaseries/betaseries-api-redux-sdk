import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

const actionFile = '../lib/modules/shows/actions/doFetchEpisode';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Retrieve episode', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with episode ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ episodeId: 239475 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_EPISODE');
      expect(action.payload.episodeId).to.deep.equal(239475);
      expect(action.payload.episode).to.be.an('object');
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(Object.keys(stateEpisodesReducer)).to.deep.equal(['239475']);
    });
  });
});
