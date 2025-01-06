const actionFile = '../lib/modules/movies/actions/doAddMovieAgendaRewatch';
const moviesFixture = require('../../../fixtures/movies.json');

describe('Add agenda rewatch to a movie', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with movie', () => {
    let action;

    const store = mockStore({
      movies: {
        [moviesFixture[0].id]: moviesFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        movie: moviesFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ id: 10212 }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('ADD_MOVIE_AGENDA_REWATCH');
      expect(action.payload.id).to.equal(10212);
      expect(action.payload.movie).to.be.an('object');
    });
  });
});
