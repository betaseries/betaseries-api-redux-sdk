import conversationsReducer
  from '../../../../lib/modules/conversations/reducers/conversations';

const actionFile = '../lib/modules/conversations/actions/doFetchConversationsList';
const conversationsFixture = require('../../../fixtures/conversations.json');

describe('Retrieve conversations of the member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        conversations: conversationsFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_CONVERSATIONS_LIST');
      expect(action.payload.conversations).to.have.lengthOf(6);
    });

    it('validate conversations reducer', () => {
      const stateCommentsReducer = conversationsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.have.lengthOf(6);
    });
  });
});
