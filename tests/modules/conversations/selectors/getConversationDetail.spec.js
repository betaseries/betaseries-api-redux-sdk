import selector
  from '../../../../lib/modules/conversations/selectors/getConversationDetail';

describe('Select conversation detail from state ', () => {
  const state = {
    detail: { 3: { id: 3 } }
  };

  it('returns conversation if exist', () => {
    const value = selector(state, { conversationId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns null if comment does not exist', () => {
    const value = selector(state, { conversationId: 5 });
    expect(value).to.equal(undefined);
  });
});
