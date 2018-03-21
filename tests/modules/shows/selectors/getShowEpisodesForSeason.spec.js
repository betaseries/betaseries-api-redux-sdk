import selector
  from '../../../../lib/modules/shows/selectors/getShowEpisodesForSeason';

describe('Select episode by show for season number from state ', () => {
  const state = {
    showsEpisodes: {
      3: {
        id: 3,
        code: 'S05E12',
        show: { id: 2 },
        season: 5
      },
      4: {
        id: 4,
        code: 'S05E11',
        show: { id: 2 },
        season: 5
      },
      5: {
        id: 5,
        code: 'S04E12',
        show: { id: 3 },
        season: 4
      }
    }
  };

  it('returns episode if exist', () => {
    const value = selector(state, { showId: 2, season: 5 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
  });

  it('returns empty array if show does not have episodes or bad season', () => {
    const value = selector(state, { showId: 2, season: 4 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(0);
  });
});
