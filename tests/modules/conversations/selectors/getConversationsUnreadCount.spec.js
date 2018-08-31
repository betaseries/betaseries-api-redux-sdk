import selector
  from '../../../../lib/modules/conversations/selectors/getConversationsUnreadCount';

describe('Get conversations unread count', () => {
  const state = {
    conversations: [{ read: false }, { read: true }, { read: false }]
  };

  it('returns conversations', () => {
    const value = selector(state);
    expect(value).to.be.a('number');
    expect(value).to.deep.equal(2);
  });
});
