import selector from '../../../../lib/modules/movies/selectors/getMovie';

describe('Select movie from state ', () => {
  const state = {
    movies: { 3: { id: 3 } }
  };

  it('returns movie if exist', () => {
    const value = selector(state, { movieId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if movie does not exist', () => {
    const value = selector(state, { movieId: 5 });
    expect(value).to.equal(undefined);
  });
});
