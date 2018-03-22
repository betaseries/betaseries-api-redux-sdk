import selector from '../../../../lib/modules/shows/selectors/getShowSeasons';

describe('Select seasons from state ', () => {
  const state = {
    showsSeasons: { 1275: { id: 1275, seasons: [1, 2, 3] } }
  };

  it('returns seasons if exist', () => {
    const value = selector(state, { showId: 1275 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if showId does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
