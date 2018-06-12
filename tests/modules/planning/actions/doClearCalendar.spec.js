import calendarReducer
  from '../../../../lib/modules/planning/reducers/calendar';

const actionFile = '../lib/modules/planning/actions/doClearCalendar';

describe('Clear planning calendar', () => {
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
      planningCalendar: {
        1: []
      }
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_PLANNING_CALENDAR');
    });

    it('validate feed reducer', () => {
      const stateCalendarReducer = calendarReducer(undefined, action);
      expect(stateCalendarReducer[1]).to.deep.equal([]);
    });
  });
});
