import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doRemoveComment';

describe('Remove comment', () => {
  /**
   * getInstance method
   */
  function getInstance() {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => Promise.resolve() }
    }).default;
  }

  describe('Remove comment with comment ID', () => {
    let action;

    const store = mockStore({
      comments: {
        1: 'comment_to_delete'
      }
    });

    const actionToDispatch = getInstance();

    before(async () => {
      action = await store.dispatch(actionToDispatch({ commentId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('REMOVE_COMMENT');
      expect(action.payload.commentId).to.equal(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([]);
    });
  });
});
