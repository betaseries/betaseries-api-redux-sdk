import calendarReducer
  from '../../../../lib/modules/planning/reducers/calendar';

const actionFile = '../lib/modules/planning/actions/doFetchCalendar';
const daysFixtures = require('../../../fixtures/days.json');

describe('Retrieve calendar event', () => {
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
        days: daysFixtures.slice(0, 6)
      })
    );

    before(async () => {
      const store = mockStore();
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_PLANNING_CALENDAR');
      expect(action.payload.days).to.have.lengthOf(6);
    });

    it('validate calendar reducer', () => {
      const stateCalendarReducer = calendarReducer(undefined, action);
      expect(stateCalendarReducer[1].map(day => day.date)).to.deep.equal([
        '2017-06-10',
        '2017-06-11',
        '2017-06-12',
        '2017-06-17',
        '2017-06-18',
        '2017-06-19'
      ]);
    });
  });
});
