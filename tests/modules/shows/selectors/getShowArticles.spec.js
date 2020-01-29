import selector from '../../../../lib/modules/shows/selectors/getShowArticles';

describe('Select articles from state ', () => {
  const state = {
    showsArticles: { 3: [1, 2, 3] }
  };

  it('returns articles if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if articles does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
