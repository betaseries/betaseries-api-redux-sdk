import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import articleReducer from '../../../../lib/modules/comments/reducers/articles';

const actionFile = '../lib/modules/comments/actions/doCommentArticle';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Comment article', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without comment on article reducer state', () => {
    let action;

    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ articleId: 120, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_ARTICLE');
      expect(action.payload.articleId).to.equal(120);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate articles reducer', () => {
      const stateArticlesReducer = articleReducer(undefined, action);
      expect(stateArticlesReducer[120]).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });

  describe('call api with comment on article reducer state', () => {
    let action;

    const store = mockStore({
      commentsArticles: {
        120: commentsFixture.slice(0, 3)
      },
      comments: commentsFixture.slice(0, 3).reduce((sum, comment) => ({
        ...sum,
        [comment.id]: comment
      }), {})
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ articleId: 120, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_ARTICLE');
      expect(action.payload.articleId).to.equal(120);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate articles reducer', () => {
      const stateArticlesReducer = articleReducer(
        store.getState().commentsArticles,
        action
      );
      expect(stateArticlesReducer[120]).to.have.lengthOf(4);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([
        '992',
        '1279',
        '2152'
      ]);
    });
  });
});
