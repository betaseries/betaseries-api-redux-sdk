import selector from '../../../../lib/modules/badges/selectors/getBadge';

describe('Select badge from state ', () => {
  const state = {
    badges: { 3: { id: 3 } }
  };

  it('returns badge if exist', () => {
    const value = selector(state, { badgeId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if badge does not exist', () => {
    const value = selector(state, { badgeId: 5 });
    expect(value).to.equal(undefined);
  });
});
