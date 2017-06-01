import membersReducer from '../../../../lib/modules/members/reducers/members';
import moviesReducer from '../../../../lib/modules/movies/reducers/movies';
import moviesMemberReducer
  from '../../../../lib/modules/movies/reducers/members';
import moviesFavoriteReducer
  from '../../../../lib/modules/movies/reducers/favorites';
import showsReducer from '../../../../lib/modules/shows/reducers/shows';
import showsMemberReducer from '../../../../lib/modules/shows/reducers/members';
import showsFavoriteReducer
  from '../../../../lib/modules/shows/reducers/favorites';

const actionFile = '../lib/modules/members/actions/doFetchMember';
const userFixture = require('../../../fixtures/user.json');

describe('Retrieve member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        member: userFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MEMBER');
      expect(action.payload.member).to.be.an('object');
      expect(action.payload.memberId).to.deep.equal(1);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(undefined, action);
      expect(Object.keys(stateMembersReducer)).to.deep.equal(['1']);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ]);
    });

    it('validate movies member reducer', () => {
      const stateMoviesMemberReducer = moviesMemberReducer(undefined, action);
      expect(stateMoviesMemberReducer[1]).to.deep.equal([
        7,
        8,
        9,
        10,
        6,
        5,
        1,
        4,
        2,
        3
      ]);
    });

    it('validate movies favorites reducer', () => {
      const stateMoviesFavoriteReducer = moviesFavoriteReducer(
        undefined,
        action
      );
      expect(stateMoviesFavoriteReducer[1]).to.deep.equal([1]);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal([
        '1',
        '2',
        '3',
        '5',
        '6',
        '8',
        '9',
        '10',
        '11'
      ]);
    });

    it('validate shows member reducer', () => {
      const stateShowsMemberReducer = showsMemberReducer(undefined, action);
      expect(stateShowsMemberReducer[1]).to.deep.equal([
        2,
        3,
        1,
        6,
        11,
        8,
        9,
        10,
        5
      ]);
    });

    it('validate shows favorites reducer', () => {
      const stateShowsFavoriteReducer = showsFavoriteReducer(undefined, action);
      expect(stateShowsFavoriteReducer[1]).to.deep.equal([11]);
    });
  });
});
