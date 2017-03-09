import selector from '../../../../lib/modules/members/selectors/getUser';

describe('Select user from state ', () => {
  const state = {
    members: { 3: { id: 3 } },
    membersUser: 3,
  };

  it('returns user if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns null if user does not exist', () => {
    // change user id
    state.membersUser = 4;

    const value = selector(state);
    expect(value).to.equal(null);
  });
});
