import homePopularReducer
  from '../../../../lib/modules/home/reducers/popularPlatform';

const actionFile = '../lib/modules/home/actions/doFetchHomePopularPlatform';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home popular platform shows', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with platform ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ platformId: 119 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_POPULAR_PLATFORM');
      expect(action.payload.platformId).to.deep.equal(119);
      expect(action.payload.shows).to.deep.equal([{ id: 1 }, { id: 64 }]);
    });

    it('validate popular platform reducer', () => {
      const stateArticlesReducer = homePopularReducer(undefined, action);
      expect(Object.keys(stateArticlesReducer)).to.deep.equal(['119']);
    });
  });
});
