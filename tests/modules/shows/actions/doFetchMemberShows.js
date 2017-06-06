import showsReducer from '../../../../lib/modules/shows/reducers/shows';
import membersShowsReducer
  from '../../../../lib/modules/shows/reducers/members';

const actionFile = '../lib/modules/shows/actions/doFetchManyShows';
const showsFixture = require('../../../fixtures/shows.json');

describe('Retrieve member shows', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with all shows ID list', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        shows: {},
        showsMembersEpisodesToSee: { 1: [982, 10212] }
      });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MEMBER_SHOWS');
      expect(action.payload.shows).to.have.lengthOf(2);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['982', '10212']);
    });

    it('validate member shows reducer', () => {
      const stateMembersShowsReducer = membersShowsReducer(undefined, action);
      expect(stateMembersShowsReducer[1]).to.deep.equal(['982', '10212']);
    });
  });
});
