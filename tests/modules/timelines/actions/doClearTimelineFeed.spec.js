import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import feedReducer from '../../../../lib/modules/timelines/reducers/feed';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';
import eventsReducer from '../../../../lib/modules/comments/reducers/events';

const actionFile = '../lib/modules/timelines/actions/doClearFeedTimeline';
const eventsFixture = require('../../../fixtures/events.json');

describe('Clear feed timeline', () => {
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
      timelineEvents: arrayToHash(eventsFixture.slice(2, 4))
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_TIMELINE_FEED');
    });

    it('validate feed reducer', () => {
      const stateFeedReducer = feedReducer(undefined, action);
      expect(stateFeedReducer).to.deep.equal([]);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.have.lengthOf(0);
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventsReducer(
        store.getState().timelineEvents,
        action
      );
      expect(Object.keys(stateEventsReducer)).to.have.lengthOf(2);
    });
  });
});
