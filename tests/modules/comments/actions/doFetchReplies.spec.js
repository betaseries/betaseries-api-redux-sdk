import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchReplies';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve replies comments of the comment', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(9, 10)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ commentId: 5 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_REPLIES');
      expect(action.payload.commentId).to.equal(5);
      expect(action.payload.comments).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['5155']);
    });
  });
});
