import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import eventReducer from '../../../../lib/modules/comments/reducers/events';
import eventsReducer from '../../../../lib/modules/timelines/reducers/events';

const actionFile = '../lib/modules/comments/actions/doCommentSpecificEvent';
const commentsFixture = require('../../../fixtures/comments.json');
const eventsFixture = require('../../../fixtures/events.json');

describe('Comment specific event', () => {
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
      timelinesEvents: arrayToHash([event])
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
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventsReducer(
        store.getState().timelinesEvents,
        action
      );
      expect(stateEventsReducer[event.id].comments).to.deep.equal(1);
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
      timelinesEvents: arrayToHash([event]),
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
        comment: commentsFixture[1]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ eventId: event.id, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_EVENT');
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate events reducer', () => {
      const stateEventsReducer = eventsReducer(
        store.getState().timelinesEvents,
        action
      );
      expect(stateEventsReducer[event.id].comments).to.deep.equal(3);
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
        '1279',
        '458338',
        '458340'
      ]);
    });
  });
});
