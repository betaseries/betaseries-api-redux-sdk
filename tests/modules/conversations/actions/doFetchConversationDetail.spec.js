import commentsReducer
  from '../../../../lib/modules/conversations/reducers/detail';

const actionFile = '../lib/modules/conversations/actions/doFetchConversationDetail';
const fixture = require('../../../fixtures/conversationDetail.json');

describe('Retrieve conversation', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with conversation ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        conversation: {
          '1': fixture
        }
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ conversationId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_CONVERSATION_DETAIL');
      expect(action.payload.conversationId).to.equal(1);
      expect(action.payload.conversation).to.be.an('object');
    });

    it('validate detail reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['1']);
    });
  });
});
