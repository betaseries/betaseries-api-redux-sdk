import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doRateShow';
const showsFixture = require('../../../fixtures/shows.json');

describe('Rate show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without shows on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: showsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ showId: 10212, note: 4 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('RATE_SHOW');
      expect(action.payload.showId).to.equal(10212);
      expect(action.payload.note).to.equal(4);
      expect(action.payload.show).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
    });
  });

  describe('call api with show already exist on reducer state', () => {
    let action;

    const store = mockStore({
      shows: {
        [showsFixture[0].id]: showsFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: showsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ showId: 10212, note: 3 })
      );
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
    });
  });
});
