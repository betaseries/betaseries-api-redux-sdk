import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import eventReducer from '../../../../lib/modules/comments/reducers/events';
import friendReducer from '../../../../lib/modules/timelines/reducers/friends';

const actionFile = '../lib/modules/comments/actions/doCommentEvent';
const commentsFixture = require('../../../fixtures/comments.json');
const eventsFixture = require('../../../fixtures/events.json');

describe('Comment event', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without comment on event reducer state', () => {
    let action;

    const event = eventsFixture[1];
    const store = mockStore({
      timelinesFriends: [event]
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ eventId: event.id, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_EVENT');
      expect(action.payload.eventId).to.equal(event.id);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate friends reducer', () => {
      const stateFriendsReducer = friendReducer(
        store.getState().timelinesFriends,
        action
      );
      expect(stateFriendsReducer[0].comments).to.deep.equal(1);
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventReducer(undefined, action);
      expect(stateEventsReducer[event.id]).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });

  describe('call api with comment on event reducer state', () => {
    let action;

    const event = eventsFixture[0];
    const store = mockStore({
      timelinesFriends: [event],
      commentsEvents: {
        [event.id]: event.first_comments.map(comment => comment.id)
      },
      comments: event.first_comments.reduce(
        (sum, comment) => ({
          ...sum,
          [comment.id]: comment
        }),
        {}
      )
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ eventId: event.id, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_EVENT');
      expect(action.payload.eventId).to.equal(event.id);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate friends reducer', () => {
      const stateFriendsReducer = friendReducer(
        store.getState().timelinesFriends,
        action
      );
      expect(stateFriendsReducer[0].comments).to.deep.equal(3);
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventReducer(
        store.getState().commentsEvents,
        action
      );
      expect(stateEventsReducer[event.id]).to.have.lengthOf(3);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([
        '992',
        '458338',
        '458340'
      ]);
    });
  });
});
