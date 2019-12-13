import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import articlesReducer
  from '../../../../lib/modules/comments/reducers/articles';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchArticleComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve article comments of the member', () => {
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
      expect(action.type).to.equal('FETCH_ARTICLE_COMMENTS');
      expect(action.payload.articleId).to.equal(1);
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate article reducer', () => {
      const stateArticlesReducer = articlesReducer(undefined, action);
      expect(stateArticlesReducer).to.deep.equal({ 1: [992, 1279] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992', '1279']);
    });
  });

  describe('call api with comments on reducer', () => {
    let action;
    const storeCommentFixture = commentsFixture.slice(0, 5);
    const store = mockStore({
      comments: arrayToHash(storeCommentFixture),
      commentsArticles: { 1: storeCommentFixture.map(comment => comment.id) }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(5, 7)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch({ articleId: 1 }));
    });

    it('validate article reducer', () => {
      const stateArticlesReducer = articlesReducer(
        store.getState().commentsArticles,
        action
      );
      expect(stateArticlesReducer).to.deep.equal({
        1: [992, 1279, 2152, 2196, 2417, 2984, 3566]
      });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([
        '992',
        '1279',
        '2152',
        '2196',
        '2417',
        '2984',
        '3566'
      ]);
    });
  });
});
