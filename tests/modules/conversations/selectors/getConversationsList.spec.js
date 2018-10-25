import selector
  from '../../../../lib/modules/conversations/selectors/getConversationsList';

describe('Select conversations from state ', () => {
  const state = {
    conversations: [1, 2, 3, 4, 5]
  };

  it('returns conversations', () => {
    const value = selector(state);
    expect(value).to.be.an('array');
    expect(value).to.have.lengthOf(5);
  });
});
