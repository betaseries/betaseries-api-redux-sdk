import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import movieReducer from '../../../../lib/modules/comments/reducers/movies';

const actionFile = '../lib/modules/comments/actions/doCommentMovie';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Comment movie', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without comment on movie reducer state', () => {
    let action;
    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ movieId: 481, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_MOVIE');
      expect(action.payload.movieId).to.equal(481);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = movieReducer(undefined, action);
      expect(stateMoviesReducer[481]).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });

  describe('call api with comment on movie reducer state', () => {
    let action;

    const store = mockStore({
      commentsMovies: {
        481: commentsFixture.slice(0, 3)
      },
      comments: commentsFixture.slice(0, 3).reduce((sum, comment) => ({
        ...sum,
        [comment.id]: comment
      }), {})
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[4]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ movieId: 481, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_MOVIE');
      expect(action.payload.movieId).to.equal(481);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = movieReducer(
        store.getState().commentsMovies,
        action
      );
      expect(stateMoviesReducer[481]).to.have.lengthOf(4);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([
        '992',
        '1279',
        '2152',
        '2417'
      ]);
    });
  });
});
