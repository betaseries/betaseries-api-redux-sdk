import selector
  from '../../../../lib/modules/persons/selectors/getPersonArticles';

describe('Select person articles from state ', () => {
  const state = {
    personsArticles: { 3: { id: 3 } }
  };

  it('returns person articles if exist', () => {
    const value = selector(state, { personId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if person articles does not exist', () => {
    const value = selector(state, { personId: 5 });
    expect(value).to.equal(undefined);
  });
});
