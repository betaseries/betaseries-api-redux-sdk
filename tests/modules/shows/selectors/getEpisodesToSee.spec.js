import selector from '../../../../lib/modules/shows/selectors/getEpisodesToSee';

describe('Select member episodes to see from state ', () => {
  const state = {
    showsEpisodes: {
      4: { id: 4 },
      3: { id: 3 },
      2: { id: 2 },
      1: { id: 1 }
    },
    showsMembersEpisodesToSee: {
      1: [2, 1],
      2: []
    }
  };

  it('returns episodes to see', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 2 }, { id: 1 }]);
  });

  it('returns undefined if member does not have episodes to see', () => {
    const value = selector(state, { memberId: 2 });
    expect(value).to.deep.equal(undefined);
  });

  it('returns undefined if member does not exists', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal(undefined);
  });
});
