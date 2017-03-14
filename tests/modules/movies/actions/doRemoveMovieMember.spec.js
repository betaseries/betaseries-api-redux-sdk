import moviesReducer from '../../../../lib/modules/movies/reducers/movies';
import membersReducer from '../../../../lib/modules/movies/reducers/members';

const actionFile = '../lib/modules/movies/actions/doRemoveMovieMember';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Remove movie member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire
      .noCallThru()
      .load(actionFile, {
        '../../../utils/fetch/ApiFetch': { remove: () => promise },
      }).default;
  }

  describe('call api without movies on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({
      movie: moviesFixture[0],
    }));


    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ movieId: 7094 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('REMOVE_MEMBER_MOVIE');
      expect(action.payload.movieId).to.equal(7094);
      expect(action.payload.memberId).to.equal(1);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.have.lengthOf(0);
    });

    it('validate members reducer', () => {
      const stateMoviesMembersReducer = membersReducer(undefined, action);
      expect(Object.keys(stateMoviesMembersReducer)).to.have.lengthOf(0);
    });
  });

  describe('call api with movie already exist on reducer state', () => {
    let action;

    const store = mockStore({
      membersUser: 1,
      moviesMembers: {
        1: [7094],
      },
      movies: {
        [moviesFixture[0].id]: moviesFixture[0],
      },
    });

    const actionToDispatch = getInstance(Promise.resolve({
      movie: moviesFixture[0],
    }));

    before(async () => {
      action = await store.dispatch(actionToDispatch({ movieId: 7094 }));
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(store.getState().movies, action);
      expect(Object.keys(stateMoviesReducer)).to.have.lengthOf(1);
      expect(stateMoviesReducer[7094].auth_user.in_account).to.deep.equal(false);
    });

    it('validate members reducer', () => {
      const stateMoviesMembersReducer = membersReducer(undefined, action);
      expect(Object.keys(stateMoviesMembersReducer)).to.have.lengthOf(0);
    });
  });
});
