import timelineReducer
  from '../../../../lib/modules/planning/reducers/timeline';

const actionFile = '../lib/modules/planning/actions/doFetchTimeline';
const daysFixtures = require('../../../fixtures/timelineDays.json');

describe('Retrieve timeline event', () => {
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
      expect(action.type).to.equal('FETCH_PLANNING_TIMELINE');
      expect(action.payload.days).to.have.lengthOf(6);
    });

    it('validate timeline reducer', () => {
      const stateTimelineReducer = timelineReducer(undefined, action);
      expect(stateTimelineReducer[1].map(day => day.date)).to.deep.equal([
        '2017-04-20',
        '2017-04-24',
        '2017-05-01',
        '2017-05-05',
        '2017-05-08',
        '2017-05-15'
      ]);
    });
  });
});
