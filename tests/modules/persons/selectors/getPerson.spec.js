import selector from '../../../../lib/modules/persons/selectors/getPerson';

describe('Select person from state ', () => {
  const state = {
    persons: { 3: { id: 3 } }
  };

  it('returns person if exist', () => {
    const value = selector(state, { personId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if person does not exist', () => {
    const value = selector(state, { personId: 5 });
    expect(value).to.deep.equal(undefined);
  });
});
