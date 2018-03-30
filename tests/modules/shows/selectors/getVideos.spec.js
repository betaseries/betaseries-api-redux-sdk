import selector from '../../../../lib/modules/shows/selectors/getVideos';

describe('Select videos from state ', () => {
  const state = {
    showsVideos: { 3: [1, 2, 3] }
  };

  it('returns videos if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if videos does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
