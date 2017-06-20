import selector from '../../../../lib/modules/shows/selectors/getFavoriteShows';

describe('Select show from state ', () => {
  const state = {
    shows: {
      4: { id: 4 },
      3: { id: 3 },
      2: { id: 2 },
      1: { id: 1 }
    },
    showsMembers: {
      2: [
        {
          id: 1,
          infos: { favorited: false }
        },
        {
          id: 2,
          infos: { favorited: false }
        },
        {
          id: 3,
          infos: { favorited: true }
        }
      ]
    }
  };

  it('returns favorite shows', () => {
    const value = selector(state, { memberId: 2 });
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns undefined if member does not have favorite shows', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal(undefined);
  });
});
