import articlesReducer
  from '../../../../lib/modules/comments/reducers/articles';

const actionFile = '../lib/modules/comments/actions/doClearArticleComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Clear article comments', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with article ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ articleId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_ARTICLE_COMMENTS');
      expect(action.payload.articleId).to.equal(1);
    });

    it('validate articles reducer', () => {
      const stateArticlesReducer = articlesReducer(undefined, action);
      expect(stateArticlesReducer).to.deep.equal({});
    });
  });
});
