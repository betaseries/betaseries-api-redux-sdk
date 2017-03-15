import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';

const actionFile = '../lib/modules/shows/actions/doFetchManyEpisodes';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Retrieve many episodes', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with all episodes ID list', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        showsEpisodes: {}
      });
      action = await store.dispatch(
        actionToDispatch({ episodeIds: [239475, 239476] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_EPISODES');
      expect(action.payload.episodeIds).to.deep.equal([239475, 239476]);
      expect(action.payload.episodes).to.have.lengthOf(2);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(Object.keys(stateEpisodesReducer)).to.deep.equal([
        '239475',
        '239476'
      ]);
    });
  });

  describe('clean episodes ID who already exist on state before dispatch', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episodes: episodesFixture.slice(0, 2)
      })
    );

    before(async () => {
      store = mockStore({
        showsEpisodes: { 982: { id: 982 } }
      });

      action = await store.dispatch(
        actionToDispatch({ episodeIds: [239475, 982, 239476] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_EPISODES');
      expect(action.payload.episodeIds).to.deep.equal([239475, 239476]);
      expect(action.payload.episodes).to.have.lengthOf(2);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(Object.keys(stateEpisodesReducer)).to.deep.equal([
        '982',
        '239475',
        '239476'
      ]);
    });
  });

  describe('api returns only one episode', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        episode: episodesFixture[0]
      })
    );

    before(async () => {
      store = mockStore({
        showsEpisodes: { 982: { id: 982 } }
      });

      action = await store.dispatch(
        actionToDispatch({ episodeIds: [239475, 982] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_EPISODES');
      expect(action.payload.episodeIds).to.deep.equal([239475]);
      expect(action.payload.episodes).to.have.lengthOf(1);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(Object.keys(stateEpisodesReducer)).to.deep.equal([
        '982',
        '239475'
      ]);
    });
  });
});
