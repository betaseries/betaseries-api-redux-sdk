import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doEditCommentLocale';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Change a comment locale', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with comment ID and the new locale', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ commentId: 992, locale: 'en' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('EDIT_COMMENT_LOCALE');
      expect(action.payload.commentId).to.equal(992);
      expect(action.payload.locale).to.equal('en');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });
});
