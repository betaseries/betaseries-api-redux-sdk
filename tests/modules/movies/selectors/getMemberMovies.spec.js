import selector from '../../../../lib/modules/movies/selectors/getMemberMovies';

describe('Select member movies from state ', () => {
  const state = {
    movies: {
      4: { id: 4, user: { status: 0 }, auth_user: { status: 0 } },
      3: { id: 3, user: { status: 1 }, auth_user: { status: 0 } },
      2: { id: 2, user: { status: 1 }, auth_user: { status: 0 } },
      1: { id: 1, user: { status: 2 }, auth_user: { status: 2 } }
    },
    moviesMembers: {
      4: [3, 2, 1],
      1: [3, 2, 1]
    }
  };

  it('returns member movies', () => {
    const value = selector(state, { memberId: 4 });
    expect(value).to.have.lengthOf(3);
  });

  it('returns only member movies with state 2', () => {
    const value = selector(state, { memberId: 4, state: 2 });
    expect(value).to.have.lengthOf(1);
  });

  it('returns null if member does not have movies with state 0', () => {
    const value = selector(state, { memberId: 4, state: 0 });
    expect(value).to.deep.equal(undefined);
  });

  it('returns only member movies with state 0 for auth user', () => {
    const value = selector(state, { memberId: 1, state: 0 });
    expect(value.map(movie => movie.id)).to.deep.equal([3, 2]);
  });

  it('returns null if member does not have movies', () => {
    const value = selector(state, { memberId: 2 });
    expect(value).to.deep.equal(undefined);
  });
});
