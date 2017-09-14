import timelineReducer
  from '../../../../lib/modules/planning/reducers/timeline';

const actionFile = '../lib/modules/planning/actions/doClearTimeline';

describe('Clear planning timeline', () => {
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
      planningTimeline: {
        1: []
      }
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_PLANNING_TIMELINE');
    });

    it('validate feed reducer', () => {
      const stateTimelineReducer = timelineReducer(undefined, action);
      expect(stateTimelineReducer[1]).to.deep.equal([]);
    });
  });
});
