import selector from '../../../../lib/modules/shows/selectors/getSimilarShows';

describe('Select show from state ', () => {
  const state = {
    shows: {
      4: { id: 4 },
      3: { id: 3 },
      2: { id: 2 },
      1: { id: 1 },
    },
    showsSimilars: {
      4: [2, 1],
    },
  };

  it('returns similar shows', () => {
    const value = selector(state, { showId: 4 });
    expect(value).to.deep.equal([{ id: 1 }, { id: 2 }]);
  });

  it('returns empty array if show does not have similar shows', () => {
    const value = selector(state, { showId: 2 });
    expect(value).to.deep.equal([]);
  });
});
