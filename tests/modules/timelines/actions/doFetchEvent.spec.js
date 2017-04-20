import _map from 'lodash/map';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import eventsReducer from '../../../../lib/modules/timelines/reducers/events';
import eventsCommentReducer
  from '../../../../lib/modules/comments/reducers/events';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/timelines/actions/doFetchEvent';
const eventsFixture = require('../../../fixtures/events.json');

describe('Retrieve event timeline', () => {
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
        event: eventsFixture[0],
        eventId: eventsFixture[0].id
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({
          eventId: 1827424327
        })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_TIMELINE_EVENT');
      expect(action.payload.event).to.be.an('object');
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventsReducer(undefined, action);
      expect(_map(stateEventsReducer, event => event.id)).to.deep.equal([
        1827424327
      ]);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.have.lengthOf(2);
    });

    it('validate events reducer', () => {
      const stateEventsCommentReducer = eventsCommentReducer(undefined, action);
      expect(Object.keys(stateEventsCommentReducer)).to.have.lengthOf(1);
    });
  });

  describe('call api with state is already defined', () => {
    let action;

    const store = mockStore({
      timelinesEvents: arrayToHash(eventsFixture.slice(2, 4))
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        event: eventsFixture[3],
        eventId: eventsFixture[3].id
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({
          eventId: 1827420999
        })
      );
    });

    it('validate events reducer when I received new events', () => {
      const stateEventsReducer = eventsReducer(
        store.getState().timelinesEvents,
        action
      );

      expect(_map(stateEventsReducer, event => event.id)).to.deep.equal([
        1827420999,
        1827421054
      ]);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.have.lengthOf(0);
    });

    it('validate events reducer', () => {
      const stateEventsCommentReducer = eventsCommentReducer(undefined, action);
      expect(Object.keys(stateEventsCommentReducer)).to.have.lengthOf(0);
    });
  });

  describe('call api with state is already defined', () => {
    let action;

    const store = mockStore({
      timelinesEvents: arrayToHash(eventsFixture.slice(2, 4))
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        event: eventsFixture[3],
        eventId: eventsFixture[3].id
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({
          eventId: 1827420999
        })
      );
    });

    it('validate events reducer when I received old events', () => {
      const stateEventsReducer = eventsReducer(
        store.getState().timelinesEvents,
        action
      );

      expect(_map(stateEventsReducer, event => event.id)).to.deep.equal([
        1827420999,
        1827421054
      ]);
    });
  });
});
