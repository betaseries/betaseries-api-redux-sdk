import moviesReducer from '../../../../lib/modules/comments/reducers/movies';

const actionFile = '../lib/modules/comments/actions/doClearMovieComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Clear movie comments', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with movie ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ movieId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_MOVIE_COMMENTS');
      expect(action.payload.movieId).to.equal(1);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(stateMoviesReducer).to.deep.equal({});
    });
  });
});
