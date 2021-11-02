import homeTrailersReducer
  from '../../../../lib/modules/home/reducers/trailers';

const actionFile = '../lib/modules/home/actions/doFetchHomeTrailers';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home trailers', () => {
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
        videos: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        videos: [{ id: 1 }, { id: 64 }, { id: 99 }]
      });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_TRAILERS');
      expect(action.payload.videos).to.be.an('array');
    });

    it('validate homeTrailers reducer', () => {
      const stateHomeReducer = homeTrailersReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
