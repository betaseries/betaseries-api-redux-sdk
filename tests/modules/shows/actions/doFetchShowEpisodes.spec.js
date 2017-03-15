import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

const actionFile = '../lib/modules/shows/actions/doFetchShowEpisodes';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Retrieve episodes of the show', () => {
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
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture
      })
    );

    before(async () => {
      store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SHOW_EPISODES');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload).to.have.ownProperty('episodes');
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(12);
    });
  });

  describe('call api with show ID and season number', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ showId: 10212, season: 1 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SHOW_EPISODES');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload.season).to.deep.equal(1);
    });
  });
});
