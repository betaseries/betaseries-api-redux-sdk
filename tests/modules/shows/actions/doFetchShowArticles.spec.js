import articlesReducer from '../../../../lib/modules/shows/reducers/articles';

const actionFile = '../lib/modules/shows/actions/doFetchShowArticles';

describe('Retrieve articles of the show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        articles: 'articles list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SHOW_ARTICLES');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload.articles).to.deep.equal('articles list');
    });

    it('validate articles reducer', () => {
      const stateArticlesReducer = articlesReducer(undefined, action);
      expect(Object.keys(stateArticlesReducer)).to.deep.equal(['10212']);
    });
  });
});
