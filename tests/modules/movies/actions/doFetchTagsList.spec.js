import tagsReducer from '../../../../lib/modules/movies/reducers/tags';

const actionFile = '../lib/modules/movies/actions/doFetchTagsList';
const tagsFixture = require('../../../fixtures/moviesTags.json');

describe('Retrieve tags list', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with no params', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        movieTags: tagsFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MOVIE_TAGS_LIST');
      expect(action.payload.tags).to.be.an('array');
    });

    it('validate tags reducer', () => {
      const stateTagsReducer = tagsReducer(undefined, action);
      expect(Object.keys(stateTagsReducer)).to.have.lengthOf(0);
    });
  });
});
