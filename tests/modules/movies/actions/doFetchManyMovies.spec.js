import moviesReducer from '../../../../lib/modules/movies/reducers/movies';

const actionFile = '../lib/modules/movies/actions/doFetchManyMovies';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Retrieve many movies', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with all movies ID list', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        movies: moviesFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        movies: {}
      });
      action = await store.dispatch(
        actionToDispatch({ movieIds: [7094, 4656] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_MOVIES');
      expect(action.payload.movieIds).to.deep.equal([7094, 4656]);
      expect(action.payload.movies).to.have.lengthOf(2);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['4656', '7094']);
    });
  });

  describe('clean movies ID who already exist on state before dispatch', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        movies: moviesFixture.slice(0, 2)
      })
    );

    before(async () => {
      store = mockStore({
        movies: { 481: { id: 481 } }
      });

      action = await store.dispatch(
        actionToDispatch({ movieIds: [7094, 4656, 481] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_MOVIES');
      expect(action.payload.movieIds).to.deep.equal([7094, 4656]);
      expect(action.payload.movies).to.have.lengthOf(2);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(store.getState().movies, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal([
        '481',
        '4656',
        '7094'
      ]);
    });
  });

  describe('api returns only one movie', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      store = mockStore({
        movies: { 481: { id: 481 } }
      });

      action = await store.dispatch(
        actionToDispatch({ movieIds: [7094, 481] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_MOVIES');
      expect(action.payload.movieIds).to.deep.equal([7094]);
      expect(action.payload.movies).to.have.lengthOf(1);
    });

    it('validate movies reducer', () => {
      const stateMoviesReducer = moviesReducer(store.getState().movies, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['481', '7094']);
    });
  });
});
