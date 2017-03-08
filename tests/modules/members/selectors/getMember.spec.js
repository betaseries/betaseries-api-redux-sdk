import selector from '../../../../lib/modules/members/selectors/getMember';

describe('Select member from state ', () => {
  const state = {
    members: { 3: { id: 3 } },
  };

  it('returns member if exist', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns null if member does not exist', () => {
    const value = selector(state, { memberId: 5 });
    expect(value).to.equal(null);
  });
});
