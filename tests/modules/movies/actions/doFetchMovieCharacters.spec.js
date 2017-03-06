import charactersReducer from '../../../../lib/modules/movies/reducers/characters';

const actionFile = '../lib/modules/movies/actions/doFetchMovieCharacters';

describe('Retrieve characters of the movie', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire
      .noCallThru()
      .load(actionFile, {
        '../../../utils/fetch/ApiFetch': { get: () => promise },
      }).default;
  }

  describe('call api with movie ID', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({
      characters: 'characters list',
    }));

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ movieId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MOVIE_CHARACTERS');
      expect(action.payload.movieId).to.deep.equal(10212);
      expect(action.payload.characters).to.deep.equal('characters list');
    });

    it('validate characters reducer', () => {
      const stateCharactersReducer = charactersReducer(undefined, action);
      expect(Object.keys(stateCharactersReducer)).to.deep.equal(['10212']);
    });
  });
});
