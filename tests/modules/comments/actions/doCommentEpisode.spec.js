import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import episodeReducer from '../../../../lib/modules/comments/reducers/episodes';

const actionFile = '../lib/modules/comments/actions/doCommentEpisode';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Comment episode', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without comment on episode reducer state', () => {
    let action;
    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ episodeId: 481, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_EPISODE');
      expect(action.payload.episodeId).to.equal(481);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodeReducer(undefined, action);
      expect(stateEpisodesReducer[481]).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });

  describe('call api with comment on episode reducer state', () => {
    let action;

    const store = mockStore({
      commentsEpisodes: {
        481: commentsFixture.slice(0, 3)
      },
      comments: commentsFixture.slice(0, 3).reduce((sum, comment) => ({
        ...sum,
        [comment.id]: comment
      }), {})
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[4]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ episodeId: 481, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_EPISODE');
      expect(action.payload.episodeId).to.equal(481);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate episodes reducer', () => {
      const stateEpisodesReducer = episodeReducer(
        store.getState().commentsEpisodes,
        action
      );
      expect(stateEpisodesReducer[481]).to.have.lengthOf(4);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([
        '992',
        '1279',
        '2152',
        '2417'
      ]);
    });
  });
});
