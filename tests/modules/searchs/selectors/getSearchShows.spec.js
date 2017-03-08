import selector from '../../../../lib/modules/searchs/selectors/getSearchShows';

describe('Select shows from state ', () => {
  const state = {
    searchsShows: [1, 2, 3, 4, 5],
  };

  it('returns shows', () => {
    const value = selector(state);
    expect(value).to.be.an('array');
    expect(value).to.have.lengthOf(5);
  });
});
