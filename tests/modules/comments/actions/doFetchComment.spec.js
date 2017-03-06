import commentsReducer from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchComment';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve comment', () => {
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

  describe('call api with comment ID', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({
      comment: commentsFixture[0],
    }));

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ commentId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_COMMENT');
      expect(action.payload.commentId).to.equal(1);
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });
});
