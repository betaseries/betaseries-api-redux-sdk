import showsDiscoverReducer
  from '../../../../lib/modules/shows/reducers/discover';

const actionFile = '../lib/modules/shows/actions/doClearDiscoverShows';

describe('Retrieve discover shows', () => {
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

    const actionToDispatch = getInstance(Promise.resolve());

    const store = mockStore({
      showsDiscover: [
        {
          id: 189
        }
      ]
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_DISCOVER_SHOWS');
    });

    it('validate discover reducer', () => {
      const stateDiscoverReducer = showsDiscoverReducer(undefined, action);
      expect(stateDiscoverReducer).to.deep.equal([]);
    });
  });
});
