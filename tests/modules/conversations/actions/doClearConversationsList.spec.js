import conversationsReducer
  from '../../../../lib/modules/conversations/reducers/conversations';
import actionToDispatch
  from '../../../../lib/modules/conversations/actions/doClearConversationsList';

describe('Clear conversations list', () => {
  describe('call action', () => {
    let action;
    let store;

    before(async () => {
      store = mockStore({
        conversationsConversations: ['list of conversations']
      });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_CONVERSATIONS_LIST');
    });

    it('validate conversations reducer', () => {
      const stateReducer = conversationsReducer(
        store.conversationsConversations,
        action
      );
      expect(Object.keys(stateReducer)).to.deep.equal([]);
    });
  });
});
