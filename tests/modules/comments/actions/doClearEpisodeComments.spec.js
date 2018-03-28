import episodesReducer
  from '../../../../lib/modules/comments/reducers/episodes';

const actionFile = '../lib/modules/comments/actions/doClearEpisodeComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Clear episode comments', () => {
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
        comments: commentsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ episodeId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_EPISODE_COMMENTS');
      expect(action.payload.episodeId).to.equal(1);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(stateEpisodesReducer).to.deep.equal({});
    });
  });
});
