import friendsReducer from '../../../../lib/modules/timelines/reducers/friends';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';
import eventsReducer from '../../../../lib/modules/comments/reducers/events';

const actionFile = '../lib/modules/timelines/actions/doFetchFriendsTimeline';
const eventsFixture = require('../../../fixtures/events.json');

describe('Retrieve friends timeline', () => {
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
      expect(action.type).to.equal('FETCH_FRIENDS_TIMELINE');
      expect(action.payload.events).to.be.an('array');
    });

    it('validate friends reducer', () => {
      const stateFriendsReducer = friendsReducer(undefined, action);
      expect(stateFriendsReducer.map(event => event.id)).to.deep.equal([
        1827421054,
        1827420999
      ]);
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
      timelinesFriends: eventsFixture.slice(2, 4)
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        events: eventsFixture.slice(0, 4)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate friends reducer when I received new events', () => {
      const stateFriendsReducer = friendsReducer(
        store.getState().timelinesFriends,
        action
      );

      expect(stateFriendsReducer.map(event => event.id)).to.deep.equal([
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
      timelinesFriends: eventsFixture.slice(2, 4)
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        events: eventsFixture.slice(3, 5)
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate friends reducer when I received old events', () => {
      const stateFriendsReducer = friendsReducer(
        store.getState().timelinesFriends,
        action
      );

      expect(stateFriendsReducer.map(event => event.id)).to.deep.equal([
        1827421054,
        1827420999,
        1827420637
      ]);
    });
  });

  describe('call api returns unordered events', () => {
    let action;

    const store = mockStore();

    const eventsPayload = eventsFixture.slice(2, 5).reverse();

    const actionToDispatch = getInstance(
      Promise.resolve({
        events: eventsPayload
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate friends reducer', () => {
      const stateFriendsReducer = friendsReducer(undefined, action);
      expect(eventsPayload.map(event => event.id)).to.deep.equal([
        1827420637,
        1827420999,
        1827421054
      ]);

      expect(stateFriendsReducer.map(event => event.id)).to.deep.equal([
        1827421054,
        1827420999,
        1827420637
      ]);
    });
  });
});
