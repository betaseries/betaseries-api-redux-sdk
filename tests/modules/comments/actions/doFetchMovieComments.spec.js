import moviesReducer from '../../../../lib/modules/comments/reducers/movies';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchMovieComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve movie comments of the movie', () => {
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
      expect(action.type).to.equal('FETCH_MOVIE_COMMENTS');
      expect(action.payload.movieId).to.equal(1);
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate movies reducer', () => {
      const stateEpisodesReducer = moviesReducer(undefined, action);
      expect(stateEpisodesReducer).to.deep.equal({ 1: [992, 1279] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992', '1279']);
    });
  });

  describe('check if reply comments is dispatch on reducer', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(8, 10)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ movieId: 1 }));
    });

    it('validate action', () => {
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate movies reducer', () => {
      const stateEpisodesReducer = moviesReducer(undefined, action);
      expect(stateEpisodesReducer).to.deep.equal({ 1: [5129] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['5129', '5155']);
    });
  });
});
