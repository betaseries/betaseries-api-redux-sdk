import selector from '../../../../lib/modules/shows/selectors/getPhotos';

describe('Select photos from state ', () => {
  const state = {
    showsPhotos: { 3: [1, 2, 3] }
  };

  it('returns photos if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if photos does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
