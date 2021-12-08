import homePopularArticlesReducer
  from '../../../../lib/modules/home/reducers/articles';

const actionFile = '../lib/modules/home/actions/doFetchHomePopularArticles';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home popular articles', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        articles: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        articles: [{ id: 1 }, { id: 64 }, { id: 99 }]
      });
      action = await store.dispatch(actionToDispatch({ limit: 10 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_POPULAR_ARTICLES');
      expect(action.payload.articles).to.be.an('array');
    });

    it('validate homeArticles reducer', () => {
      const stateHomeReducer = homePopularArticlesReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
