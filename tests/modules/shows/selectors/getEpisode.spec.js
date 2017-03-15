import selector from '../../../../lib/modules/shows/selectors/getEpisode';

describe('Select episode from state ', () => {
  const state = {
    showsEpisodes: { 3: { id: 3 } }
  };

  it('returns episode if exist', () => {
    const value = selector(state, { episodeId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns null if episode does not exist', () => {
    const value = selector(state, { episodeId: 5 });
    expect(value).to.equal(undefined);
  });
});
