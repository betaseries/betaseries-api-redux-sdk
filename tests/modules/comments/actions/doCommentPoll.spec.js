import commentReducer from '../../../../lib/modules/comments/reducers/comments';
import pollReducer from '../../../../lib/modules/comments/reducers/polls';

const actionFile = '../lib/modules/comments/actions/doCommentPoll';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Comment poll', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without comment on poll reducer state', () => {
    let action;

    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ pollId: 120, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_POLL');
      expect(action.payload.pollId).to.equal(120);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate polls reducer', () => {
      const statePollsReducer = pollReducer(undefined, action);
      expect(statePollsReducer[120]).to.have.lengthOf(1);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992']);
    });
  });

  describe('call api with comment on poll reducer state', () => {
    let action;

    const store = mockStore({
      commentsPolls: {
        120: commentsFixture.slice(0, 3)
      },
      comments: commentsFixture.slice(0, 3).reduce((sum, comment) => ({
        ...sum,
        [comment.id]: comment
      }), {})
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        comment: commentsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ pollId: 120, text: 'TEST' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('COMMENT_POLL');
      expect(action.payload.pollId).to.equal(120);
      expect(action.payload.text).to.equal('TEST');
      expect(action.payload.comment).to.be.an('object');
    });

    it('validate polls reducer', () => {
      const statePollsReducer = pollReducer(
        store.getState().commentsPolls,
        action
      );
      expect(statePollsReducer[120]).to.have.lengthOf(4);
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentReducer(
        store.getState().comments,
        action
      );
      expect(Object.keys(stateCommentsReducer)).to.deep.equal([
        '992',
        '1279',
        '2152'
      ]);
    });
  });
});
