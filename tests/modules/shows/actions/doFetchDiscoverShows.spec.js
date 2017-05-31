import discoverReducer from '../../../../lib/modules/shows/reducers/discover';

const actionFile = '../lib/modules/shows/actions/doFetchDiscoverShows';
const showsFixture = require('../../../fixtures/shows.json');

describe('Retrieve discover shows', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with member ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 10)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ limit: 10 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_DISCOVER_SHOWS');
      expect(action.payload.limit).to.equal(10);
      expect(action.payload.shows).to.have.lengthOf(10);
    });

    it('validate discover reducer', () => {
      const stateDiscoverReducer = discoverReducer(undefined, action);
      expect(stateDiscoverReducer).to.have.lengthOf(10);
    });
  });
});
