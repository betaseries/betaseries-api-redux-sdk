import selector
  from '../../../../lib/modules/subtitles/selectors/getEpisodeSubtitles';

describe('Select episode subtitles from state ', () => {
  const state = {
    subtitlesEpisodes: { 3: [1, 2, 3] }
  };

  it('returns subtitles if exist', () => {
    const value = selector(state, { episodeId: 3 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if subtitles does not exist', () => {
    const value = selector(state, { episodeId: 5 });
    expect(value).to.equal(undefined);
  });
});
