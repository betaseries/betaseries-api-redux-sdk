import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doUnmarkManyEpisodeAsWatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Unmark episode as watched', () => {
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
      await store.dispatch(actionToDispatch({ episodeIds: [239480, 239479] }));
      action = store.getActions()[0];
    });

    it('validate unmark episode as watched action', () => {
      expect(action.type).to.equal('UNMARK_MANY_EPISODE_AS_WATCHED');
      expect(action.payload.episodeIds).to.deep.equal([239480, 239479]);
      expect(action.payload.seen).to.equal(false);
    });

    it('validate episodes reducer for unmark watched', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );
      expect(stateEpisodesReducer[239480].user.seen).to.deep.equal(false);
      expect(stateEpisodesReducer[239479].user.seen).to.deep.equal(false);
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
      await store.dispatch(
        actionToDispatch({ episodeIds: [23948089, 23947990] })
      );
      action = store.getActions()[0];
    });

    it('validate unmark episode as watched action', () => {
      expect(action.type).to.equal('UNMARK_MANY_EPISODE_AS_WATCHED');
      expect(action.payload.episodeIds).to.deep.equal([23948089, 23947990]);
      expect(action.payload.seen).to.equal(false);
    });

    it("validate episodes reducer for unmark many watched not changed and don't have episode", () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(stateEpisodesReducer[23948089]).to.equal(undefined);
      expect(stateEpisodesReducer[23947990]).to.equal(undefined);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(12);
    });
  });
});
