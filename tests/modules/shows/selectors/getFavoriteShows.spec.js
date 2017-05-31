import selector from '../../../../lib/modules/shows/selectors/getFavoriteShows';

describe('Select show from state ', () => {
  const state = {
    shows: {
      4: { id: 4 },
      3: { id: 3 },
      2: { id: 2 },
      1: { id: 1 }
    },
    showsFavorites: {
      2: [2, 1]
    }
  };

  it('returns favorite shows', () => {
    const value = selector(state, { memberId: 2 });
    expect(value).to.deep.equal([{ id: 1 }, { id: 2 }]);
  });

  it('returns undefined if member does not have favorite shows', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal(undefined);
  });
});
