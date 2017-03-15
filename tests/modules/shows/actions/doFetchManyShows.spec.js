import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doFetchManyShows';
const showsFixture = require('../../../fixtures/shows.json');

describe('Retrieve many shows', () => {
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
        shows: {}
      });
      action = await store.dispatch(
        actionToDispatch({ showIds: [10212, 982] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_SHOWS');
      expect(action.payload.showIds).to.deep.equal([10212, 982]);
      expect(action.payload.shows).to.have.lengthOf(2);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['982', '10212']);
    });
  });

  describe('clean shows ID who already exist on state before dispatch', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2)
      })
    );

    before(async () => {
      store = mockStore({
        shows: { 481: { id: 481 } }
      });

      action = await store.dispatch(
        actionToDispatch({ showIds: [10212, 982, 481] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_SHOWS');
      expect(action.payload.showIds).to.deep.equal([10212, 982]);
      expect(action.payload.shows).to.have.lengthOf(2);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal([
        '481',
        '982',
        '10212'
      ]);
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

      action = await store.dispatch(
        actionToDispatch({ showIds: [10212, 481] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_SHOWS');
      expect(action.payload.showIds).to.deep.equal([10212]);
      expect(action.payload.shows).to.have.lengthOf(1);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.deep.equal(['481', '10212']);
    });
  });
});
