import homeTopReducer from '../../../../lib/modules/home/reducers/top';

const actionFile = '../lib/modules/home/actions/doFetchHomeTop';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home Top 10', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with no date', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        shows: [{ id: 1 }, { id: 64 }, { id: 99 }]
      });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_TOP');
      expect(action.payload.shows).to.be.an('array');
    });

    it('validate homeTop reducer', () => {
      const stateHomeReducer = homeTopReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
