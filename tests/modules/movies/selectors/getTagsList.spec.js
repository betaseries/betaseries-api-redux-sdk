import selector from '../../../../lib/modules/movies/selectors/getTagsList';

describe('Select tags from state ', () => {
  const state = {
    moviesTags: { 3: [1, 2, 3] }
  };

  it('returns tags if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal({ 3: [1, 2, 3] });
  });
});
