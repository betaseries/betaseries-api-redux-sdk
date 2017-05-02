import selector from '../../../../lib/modules/searchs/selectors/getSearchAll';

describe('Select all from state ', () => {
  const state = {
    searchsAll: {
      shows: [1, 2, 3, 4, 5],
      movies: [5],
      users: []
    }
  };

  it('returns all', () => {
    const value = selector(state);
    expect(value.shows).to.be.an('array');
    expect(value.shows).to.have.lengthOf(5);
    expect(value.movies).to.be.an('array');
    expect(value.movies).to.have.lengthOf(1);
    expect(value.users).to.be.an('array');
    expect(value.users).to.have.lengthOf(0);
  });
});
