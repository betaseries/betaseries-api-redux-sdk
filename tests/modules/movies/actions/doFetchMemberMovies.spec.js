import membersReducer from '../../../../lib/modules/movies/reducers/members';
import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doFetchMemberMovies';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Retrieve movies of the member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire
      .noCallThru()
      .load(actionFile, {
        '../../../utils/fetch/ApiFetch': { get: () => promise },
      }).default;
  }

  describe('call api with member ID', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({
      movies: moviesFixture.slice(0, 2),
    }));

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MEMBER_MOVIES');
      expect(action.payload.memberId).to.equal(1);
      expect(action.payload.movies).to.have.lengthOf(2);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(undefined, action);
      expect(stateMembersReducer).to.deep.equal({ 1: [7094, 4656] });
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['4656', '7094']);
    });
  });
});
