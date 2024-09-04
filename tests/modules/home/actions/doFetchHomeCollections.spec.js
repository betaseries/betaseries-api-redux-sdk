import homeCollectionsReducer
  from '../../../../lib/modules/home/reducers/collections';

const actionFile = '../lib/modules/home/actions/doFetchHomeCollections';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home collections', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with default params', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        collections: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        collections: [{ id: 1 }, { id: 64 }, { id: 99 }]
      });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_COLLECTIONS');
      expect(action.payload.collections).to.be.an('array');
    });

    it('validate homeCollections reducer', () => {
      const stateHomeReducer = homeCollectionsReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
