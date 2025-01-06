import membersMoviesReducer
  from '../../../../lib/modules/movies/reducers/members';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/movies/actions/doMarkMovieAsRewatched';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Mark movie as rewatched', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with movie already exist on reducer state', () => {
    let actions;

    const store = mockStore({
      moviesMovies: arrayToHash(moviesFixture)
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ id: 239480 }));
      actions = store.getActions();
    });

    it('validate movie as rewatched action', () => {
      expect(actions[0].type).to.equal('MARK_MOVIE_AS_REWATCHED');
      expect(actions[0].payload.id).to.deep.equal(239480);
      expect(actions[0].payload.movie).to.be.an('object');
    });
  });

  describe('call api', () => {
    let action;

    const store = mockStore({
      moviesMovies: arrayToHash(moviesFixture),
      moviesMembers: { 1: [239475, 239476, 239477, 239478] }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ id: 239475 }));
      action = store.getActions()[0];
    });

    it('validate membersMovies reducer', () => {
      const stateMembersMoviesToSeeReducer = membersMoviesReducer(
        store.getState().moviesMembers,
        action
      );

      expect(stateMembersMoviesToSeeReducer[1]).to.deep.equal([
        239475,
        239476,
        239477,
        239478
      ]);
    });
  });
});
