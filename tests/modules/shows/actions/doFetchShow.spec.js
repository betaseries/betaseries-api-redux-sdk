import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doFetchShow';
const showsFixture = require('../../../fixtures/shows.json');

describe('Retrieve show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: showsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_SHOWS');
      expect(action.payload.showIds[0]).to.deep.equal(10212);
      expect(action.payload.shows[0]).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['10212']);
    });
  });
});
