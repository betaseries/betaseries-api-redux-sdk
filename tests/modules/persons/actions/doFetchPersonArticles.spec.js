import articlesReducer from '../../../../lib/modules/persons/reducers/articles';

const actionFile = '../lib/modules/persons/actions/doFetchPersonArticles';

describe('Retrieve articles of the person', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with person ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        articles: 'articles list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ personId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_PERSON_ARTICLES');
      expect(action.payload.personId).to.deep.equal(10212);
      expect(action.payload.articles).to.deep.equal('articles list');
    });

    it('validate articles reducer', () => {
      const stateArticlesReducer = articlesReducer(undefined, action);
      expect(Object.keys(stateArticlesReducer)).to.deep.equal(['10212']);
    });
  });
});
