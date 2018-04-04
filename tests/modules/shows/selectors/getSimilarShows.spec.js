import selector from '../../../../lib/modules/shows/selectors/getSimilarShows';

describe('Select show from state ', () => {
  const state = {
    showsSimilars: {
      4: [{ id: 1 }, { id: 2 }]
    }
  };

  it('returns similar shows', () => {
    const value = selector(state, { showId: 4 });
    expect(value).to.deep.equal([{ id: 1 }, { id: 2 }]);
  });

  it('returns undefined if show does not have similar shows', () => {
    const value = selector(state, { showId: 2 });
    expect(value).to.deep.equal(undefined);
  });
});
