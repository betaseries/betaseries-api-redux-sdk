import tagsReducer from '../../../../lib/modules/movies/reducers/tags';

const actionFile = '../lib/modules/movies/actions/doAddMovieTag';
const tagsFixture = require('../../../fixtures/moviesTags.json');

describe('Add a tag to a movie', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with tag', () => {
    let action;

    const store = mockStore({
      moviesTags: tagsFixture
    });

    const actionToDispatch = getInstance(Promise.resolve(tagsFixture));

    before(async () => {
      await store.dispatch(actionToDispatch({ movieId: 123, tag: 'top' }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('POST_MOVIE_TAG');
      expect(action.payload.movieId).to.equal(123);
      expect(action.payload.tag).to.equal('top');
      expect(action.payload.tags).to.be.an('array');
    });

    it('validate tags reducer', () => {
      const stateTagsReducer = tagsReducer(store.getState().tags, action);
      expect(Object.keys(stateTagsReducer)).to.have.lengthOf(0);
    });
  });
});
