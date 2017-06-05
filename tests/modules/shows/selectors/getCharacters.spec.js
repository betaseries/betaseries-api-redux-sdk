import selector from '../../../../lib/modules/shows/selectors/getCharacters';

describe('Select characters from state ', () => {
  const state = {
    showsCharacters: { 3: [1, 2, 3] }
  };

  it('returns characters if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if characters does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
