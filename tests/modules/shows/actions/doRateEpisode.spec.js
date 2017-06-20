import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

const actionFile = '../lib/modules/shows/actions/doRateEpisode';
const episodesFixture = require('../../../fixtures/shows.json');

describe('Rate show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without episodes on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ episodeId: 239475, note: 4 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('RATE_EPISODE');
      expect(action.payload.episodeId).to.equal(239475);
      expect(action.payload.note).to.equal(4);
      expect(action.payload.episode).to.be.an('object');
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(1);
    });
  });

  describe('call api with episode already exist on reducer state', () => {
    let action;

    const store = mockStore({
      episodes: {
        [episodesFixture[0].id]: episodesFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ episodeId: 239475, note: 3 })
      );
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().episodes,
        action
      );
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(1);
    });
  });
});
