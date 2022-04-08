import tagsReducer from '../../../../lib/modules/shows/reducers/tags';

const actionFile = '../lib/modules/shows/actions/doFetchTagsList';
const tagsFixture = require('../../../fixtures/tags.json');

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
        showTags: tagsFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_TAGS_LIST');
      expect(action.payload.tags).to.be.an('array');
    });

    it('validate tags reducer', () => {
      const stateTagsReducer = tagsReducer(undefined, action);
      expect(Object.keys(stateTagsReducer)).to.have.lengthOf(0);
    });
  });
});
