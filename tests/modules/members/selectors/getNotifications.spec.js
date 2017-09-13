import selector
  from '../../../../lib/modules/members/selectors/getNotifications';

describe('Select notifications from state ', () => {
  const state = {
    membersNotifications: { 90: [{ id: 3 }] }
  };

  it('returns member notifications if exist', () => {
    const value = selector(state, { memberId: 90 });
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns null if member notifications does not exist', () => {
    const value = selector(state, { memberId: 5 });
    expect(value).to.equal(undefined);
  });
});
