import selector
  from '../../../../lib/modules/movies/selectors/getMovieArticles';

describe('Select movie articles from state ', () => {
  const state = {
    moviesArticles: { 3: { id: 3 } }
  };

  it('returns movie articles if exist', () => {
    const value = selector(state, { movieId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if movie articles does not exist', () => {
    const value = selector(state, { movieId: 5 });
    expect(value).to.equal(undefined);
  });
});
