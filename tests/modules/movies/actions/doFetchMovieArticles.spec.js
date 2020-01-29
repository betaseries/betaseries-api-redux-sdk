import articlesReducer from '../../../../lib/modules/movies/reducers/articles';

const actionFile = '../lib/modules/movies/actions/doFetchMovieArticles';

describe('Retrieve articles of the movie', () => {
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
        articles: 'articles list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ movieId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MOVIE_ARTICLES');
      expect(action.payload.movieId).to.deep.equal(10212);
      expect(action.payload.articles).to.deep.equal('articles list');
    });

    it('validate articles reducer', () => {
      const stateArticlesReducer = articlesReducer(undefined, action);
      expect(Object.keys(stateArticlesReducer)).to.deep.equal(['10212']);
    });
  });
});
