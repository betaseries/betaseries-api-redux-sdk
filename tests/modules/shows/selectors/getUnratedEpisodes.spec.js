import selector
  from '../../../../lib/modules/shows/selectors/getUnratedEpisodes';

describe('Select member unrated episodes from state ', () => {
  const state = {
    showsEpisodes: {
      4: { id: 4 },
      3: { id: 3 },
      2: { id: 2 },
      1: { id: 1 }
    },
    showsUnratedEpisodes: {
      1: [{ id: 2 }, { id: 1 }],
      2: []
    }
  };

  it('returns episodes to see', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 2 }, { id: 1 }]);
  });

  it('returns undefined if member does not have unrated episodes', () => {
    const value = selector(state, { memberId: 2 });
    expect(value).to.deep.equal([]);
  });

  it('returns undefined if member does not exists', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal(undefined);
  });
});
