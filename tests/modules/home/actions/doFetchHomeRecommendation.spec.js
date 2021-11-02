import homeRecoReducer from '../../../../lib/modules/home/reducers/reco';

const actionFile = '../lib/modules/home/actions/doFetchHomeRecommendation';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home recommendation shows', () => {
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
      expect(action.type).to.equal('FETCH_HOME_RECO');
      expect(action.payload.shows).to.be.an('array');
    });

    it('validate homeReco reducer', () => {
      const stateHomeReducer = homeRecoReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
