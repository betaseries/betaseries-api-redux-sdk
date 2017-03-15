import selector from '../../../../lib/modules/shows/selectors/getShowEpisodeByCode';

describe('Select episode by show and code from state ', () => {
  const state = {
    showsEpisodes: { 3: {
      id: 3,
      code: 'S05E12',
      show: { id: 2 },
    } },
  };

  it('returns episode if exist', () => {
    const value = selector(state, { showId: 2, code: 'S05E12' });
    expect(value.id).to.deep.equal(3);
  });

  it('returns undefined if episode code does not exist', () => {
    const value = selector(state, { showId: 2, code: 'S01E12' });
    expect(value).to.equal(undefined);
  });

  it('returns undefined if episode show does not exist', () => {
    const value = selector(state, { showId: 4, code: 'S05E12' });
    expect(value).to.equal(undefined);
  });
});
