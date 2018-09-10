import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doRemoveVote';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Remove vote on a comment', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => promise }
    }).default;
  }

  describe('Remove vote with comment ID', () => {
    let action;
    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch({ commentId: 992 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('REMOVE_COMMENT_VOTE');
      expect(action.payload.commentId).to.equal(992);
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });
});
