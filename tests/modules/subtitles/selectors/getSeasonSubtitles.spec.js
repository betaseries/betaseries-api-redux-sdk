import selector
  from '../../../../lib/modules/subtitles/selectors/getSeasonSubtitles';

describe('Select season subtitles from state ', () => {
  const state = {
    subtitlesShows: { 3: { 1: [1, 2, 3] } }
  };

  it('returns subtitles if exist', () => {
    const value = selector(state, { showId: 3, season: 1 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if subtitles does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
