import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doMarkShowAsWatched';
const showsFixture = require('../../../fixtures/shows.json');

describe('Mark show as watched', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with shows ID list', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        shows: {}
      });
      action = await store.dispatch(actionToDispatch({ id: '10212,982' }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('MARK_SHOW_AS_WATCHED');
      expect(action.payload.id).to.deep.equal('10212,982');
      expect(action.payload.shows).to.be.an('array');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['982', '10212']);
    });
  });

  describe('api returns only one show', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: showsFixture[0]
      })
    );

    before(async () => {
      store = mockStore({
        shows: { 481: { id: 481 } }
      });

      action = await store.dispatch(actionToDispatch({ id: '481' }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('MARK_SHOW_AS_WATCHED');
      expect(action.payload.id).to.deep.equal('481');
      expect(action.payload.shows).to.have.lengthOf(1);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['481', '10212']);
    });
  });
});
