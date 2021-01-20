import showsReducer from '../../../../lib/modules/searchs/reducers/shows';

const actionFile = '../lib/modules/searchs/actions/doShowsSearch';
const showsFixture = require('../../../fixtures/shows.json');

describe('Search shows', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show title', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ title: '  Alking De' }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('SEARCH_SHOWS');
      expect(action.payload.title).to.deep.equal('  Alking De');
      expect(action.payload).to.have.ownProperty('shows');
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(Object.keys(stateShowsReducer)).to.have.lengthOf(2);
      expect(action.payload.titleTrimed).to.deep.equal('%alking de%');
    });
  });

  describe('call api with show ID and season number', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ title: 'Alking De', summary: true })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('SEARCH_SHOWS');
      expect(action.payload.summary).to.equal(true);
    });
  });
});
