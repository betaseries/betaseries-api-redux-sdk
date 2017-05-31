import selector from '../../../../lib/modules/shows/selectors/getDiscoverShows';

describe('Select discover shows from state ', () => {
  const state = {
    showsDiscover: [1, 2, 3, 4]
  };

  it('returns shows if exist', () => {
    const value = selector(state);
    expect(value).to.have.lengthOf(4);
  });
});
