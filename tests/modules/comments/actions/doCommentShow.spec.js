import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import showReducer from '../../../../lib/modules/comments/reducers/shows';

const actionFile = '../lib/modules/comments/actions/doCommentShow';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Comment show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without comment on show reducer state', () => {
    let action;
    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ showId: 481, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_SHOW');
      expect(action.payload.showId).to.equal(481);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showReducer(undefined, action);
      expect(stateShowsReducer[481]).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });

  describe('call api with comment on show reducer state', () => {
    let action;

    const store = mockStore({
      commentsShows: {
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
        actionToDispatch({ showId: 481, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_SHOW');
      expect(action.payload.showId).to.equal(481);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showReducer(
        store.getState().commentsShows,
        action
      );
      expect(stateShowsReducer[481]).to.have.lengthOf(4);
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
