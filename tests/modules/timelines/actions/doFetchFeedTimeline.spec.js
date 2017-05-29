import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import arrayToID from '../../../../lib/utils/func/arrayToID';
import feedReducer from '../../../../lib/modules/timelines/reducers/feed';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';
import eventsReducer from '../../../../lib/modules/comments/reducers/events';

const actionFile = '../lib/modules/timelines/actions/doFetchFeedTimeline';
const eventsFixture = require('../../../fixtures/events.json');

describe('Retrieve feed timeline', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with empty state', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        events: eventsFixture.slice(2, 4)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_FEED_TIMELINE');
      expect(action.payload.events).to.be.an('array');
    });

    it('validate feed reducer', () => {
      const stateFeedReducer = feedReducer(undefined, action);
      expect(stateFeedReducer).to.deep.equal([1827421054, 1827420999]);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.have.lengthOf(0);
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventsReducer(undefined, action);
      expect(Object.keys(stateEventsReducer)).to.have.lengthOf(2);
    });
  });

  describe('call api with state is already defined', () => {
    let action;

    const store = mockStore({
      timelineEvents: arrayToHash(eventsFixture.slice(2, 4)),
      timelinesFriends: arrayToID(eventsFixture.slice(2, 4))
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        events: eventsFixture.slice(0, 4)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate feed reducer when I received new events', () => {
      const stateFeedReducer = feedReducer(
        store.getState().timelinesFriends,
        action
      );

      expect(stateFeedReducer).to.deep.equal([
        1827424327,
        1827423776,
        1827421054,
        1827420999
      ]);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.have.lengthOf(2);
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventsReducer(undefined, action);
      expect(Object.keys(stateEventsReducer)).to.have.lengthOf(4);
    });
  });

  describe('call api with state is already defined', () => {
    let action;

    const store = mockStore({
      timelineEvents: arrayToHash(eventsFixture.slice(2, 4)),
      timelinesFriends: arrayToID(eventsFixture.slice(0, 5))
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        page: 2,
        events: eventsFixture.slice(6, 7)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch({ page: 2 }));
    });

    it('validate feed reducer when I call page 2', () => {
      const stateFeedReducer = feedReducer(
        store.getState().timelinesFriends,
        action
      );

      expect(stateFeedReducer).to.deep.equal([
        1827424327,
        1827423776,
        1827421054,
        1827420999,
        1827420637,
        1827420482
      ]);
    });
  });

  describe('call api with state is already defined', () => {
    let action;

    const store = mockStore({
      timelineEvents: arrayToHash(eventsFixture.slice(2, 4)),
      timelinesFriends: arrayToID(eventsFixture.slice(0, 5))
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        page: 1,
        events: eventsFixture.slice(6, 7)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch({ page: 1 }));
    });

    it('validate feed reducer when I call page 1', () => {
      const stateFeedReducer = feedReducer(
        store.getState().timelinesFriends,
        action
      );

      expect(stateFeedReducer).to.deep.equal([
        1827420482,
        1827424327,
        1827423776,
        1827421054,
        1827420999,
        1827420637
      ]);
    });
  });

  describe('call api with comments', () => {
    let action;

    const store = mockStore({
      timelineEvents: arrayToHash(eventsFixture.slice(2, 4)),
      timelinesFriends: arrayToID(eventsFixture.slice(0, 5))
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        page: 1,
        events: eventsFixture.slice(6, 7)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch({ page: 1 }));
    });

    it('validate feed reducer when I call page 1', () => {
      const stateFeedReducer = feedReducer(
        store.getState().timelinesFriends,
        action
      );

      expect(stateFeedReducer).to.deep.equal([
        1827420482,
        1827424327,
        1827423776,
        1827421054,
        1827420999,
        1827420637
      ]);
    });
  });
});
