import selector from '../../../../lib/modules/members/selectors/getUser';

describe('Select user from state ', () => {
  it('returns user if exist', () => {
    const value = selector({
      members: { 1: { id: 1 } },
    });
    expect(value).to.deep.equal({ id: 1 });
  });

  it('returns null if user does not exist', () => {
    const value = selector({
      members: { 3: { id: 3 } },
    });
    expect(value).to.deep.equal(null);
  });
});
