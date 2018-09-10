import commentReducer from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doAddVote';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Add vote on a comment', () => {
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
        actionToDispatch({ commentId: 992, type: -1 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('ADD_COMMENT_VOTE');
      expect(action.payload.commentId).to.equal(992);
      expect(action.payload.type).to.equal(-1);
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });
});
