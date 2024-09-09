import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
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
      expect(action.payload.id).to.deep.equal(239480);
      expect(action.payload.seen).to.equal(false);
    });

    it('validate episodes reducer for unmark rewatched', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(stateEpisodesReducer[239480].user.seen).to.deep.equal(false);
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
      await store.dispatch(actionToDispatch({ id: 23948056 }));
      action = store.getActions()[0];
    });

    it('validate unmark episode as rewatched action', () => {
      expect(action.type).to.equal('UNMARK_EPISODE_AS_REWATCHED');
      expect(action.payload.id).to.deep.equal(23948056);
      expect(action.payload.seen).to.equal(false);
    });

    it("validate episodes reducer for unmark rewatched not changed and don't have episode", () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(stateEpisodesReducer[23948056]).to.equal(undefined);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(12);
    });
  });
});
