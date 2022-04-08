import selector from '../../../../lib/modules/shows/selectors/getShowTags';

describe('Select tags from state ', () => {
  const state = {
    showsTags: { 3: [1, 2, 3] }
  };

  it('returns tags if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal([1, 2, 3]);
  });

  it('returns null if tags does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
