const actionFile = '../lib/modules/comments/actions/doAddCommentSubscription';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Add subscription to comments on a media', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api to add subscription', () => {
    let action;
    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ id: 1827423776, type: 'show' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('ADD_COMMENT_SUBSCRIPTION');
      expect(action.payload.id).to.equal(1827423776);
      expect(action.payload.type).to.equal('show');
    });
  });
});
