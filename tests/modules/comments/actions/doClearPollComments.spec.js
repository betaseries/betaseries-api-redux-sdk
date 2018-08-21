import pollsReducer from '../../../../lib/modules/comments/reducers/polls';

const actionFile = '../lib/modules/comments/actions/doClearPollComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Clear poll comments', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with poll ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ pollId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_POLL_COMMENTS');
      expect(action.payload.pollId).to.equal(1);
    });

    it('validate polls reducer', () => {
      const statePollsReducer = pollsReducer(undefined, action);
      expect(statePollsReducer).to.deep.equal({});
    });
  });
});
