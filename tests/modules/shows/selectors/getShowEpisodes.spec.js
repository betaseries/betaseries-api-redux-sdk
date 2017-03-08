import selector from '../../../../lib/modules/shows/selectors/getShowEpisodes';

describe('Select episode by show from state ', () => {
  const state = {
    showsEpisodes: {
      3: {
        id: 3,
        code: 'S05E12',
        show: { id: 2 },
      },
      4: {
        id: 4,
        code: 'S05E11',
        show: { id: 2 },
      },
      5: {
        id: 5,
        code: 'S05E12',
        show: { id: 3 },
      },
    },
  };

  it('returns episode if exist', () => {
    const value = selector(state, { showId: 2 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
  });

  it('returns empty array if show does not have episodes', () => {
    const value = selector(state, { showId: 4 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(0);
  });
});
