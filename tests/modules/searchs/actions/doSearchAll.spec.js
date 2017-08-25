import showsReducer from '../../../../lib/modules/searchs/reducers/all';

const actionFile = '../lib/modules/searchs/actions/doSearchAll';
const showsFixture = require('../../../fixtures/shows.json');

describe('Search all', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with query', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 2),
        movies: [],
        users: []
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ query: '  Alking De' }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('SEARCH_ALL');
      expect(action.payload.query).to.deep.equal('  Alking De');
      expect(action.payload).to.have.ownProperty('shows');
      expect(action.payload).to.have.ownProperty('movies');
      expect(action.payload).to.have.ownProperty('users');
    });

    it('validate all reducer', () => {
      const stateAllReducer = showsReducer(undefined, action);
      expect(action.payload.queryTrimed).to.deep.equal('alking de');
      expect(stateAllReducer.shows).to.have.lengthOf(2);
      expect(stateAllReducer.movies).to.have.lengthOf(0);
      expect(stateAllReducer.users).to.have.lengthOf(0);
    });
  });
});

describe('Search all with limit = 20', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with query', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        shows: showsFixture.slice(0, 8),
        movies: [],
        users: []
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ query: ' B', limit: 20 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('SEARCH_ALL');
      expect(action.payload.query).to.deep.equal(' B');
      expect(action.payload.limit).to.deep.equal(20);
      expect(action.payload).to.have.ownProperty('shows');
      expect(action.payload).to.have.ownProperty('movies');
      expect(action.payload).to.have.ownProperty('users');
    });

    it('validate all reducer', () => {
      const stateAllReducer = showsReducer(undefined, action);
      expect(action.payload.queryTrimed).to.deep.equal('b');
      expect(stateAllReducer.shows).to.have.lengthOf(8);
      expect(stateAllReducer.movies).to.have.lengthOf(0);
      expect(stateAllReducer.users).to.have.lengthOf(0);
    });
  });
});
