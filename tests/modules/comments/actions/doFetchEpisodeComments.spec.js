import episodesReducer from '../../../../lib/modules/comments/reducers/episodes';
import commentsReducer from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchEpisodeComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve episode comments of the member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire
      .noCallThru()
      .load(actionFile, {
        '../../../utils/fetch/ApiFetch': { get: () => promise },
      }).default;
  }

  describe('call api with episode ID', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({
      comments: commentsFixture.slice(0, 2),
    }));

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ episodeId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_EPISODE_COMMENTS');
      expect(action.payload.episodeId).to.equal(1);
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodesReducer(undefined, action);
      expect(stateEpisodesReducer).to.deep.equal({ 1: [992, 1279] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992', '1279']);
    });
  });
});
