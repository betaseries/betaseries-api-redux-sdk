import showsReducer from '../../../../lib/modules/shows/reducers/shows';

const actionFile = '../lib/modules/shows/actions/doAddShowAgendaRewatch';
const showsFixture = require('../../../fixtures/shows.json');

describe('Add agenda rewatch to a show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with show', () => {
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
      await store.dispatch(actionToDispatch({ id: 10212 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('ADD_SHOW_AGENDA_REWATCH');
      expect(action.payload.id).to.equal(10212);
      expect(action.payload.show).to.be.an('object');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(store.getState().shows, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(1);
    });
  });
});
