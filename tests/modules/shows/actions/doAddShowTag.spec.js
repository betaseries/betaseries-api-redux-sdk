import tagsReducer from '../../../../lib/modules/shows/reducers/tags';

const actionFile = '../lib/modules/shows/actions/doAddShowTag';
const tagsFixture = require('../../../fixtures/tags.json');

describe('Add a tag to a show', () => {
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
      tags: {
        '123': tagsFixture
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        show: tagsFixture[0]
      })
    );

    before(async () => {
      await store.dispatch(actionToDispatch({ showId: 123, tag: 'animation' }));
      action = store.getActions()[0];
    });

    it('validate action', () => {
      expect(action.type).to.equal('POST_SHOW_TAG');
      expect(action.payload.showId).to.equal(123);
      expect(action.payload.tag).to.equal('animation');
      expect(action.payload.tags).to.be.an('array');
    });

    it('validate tags reducer', () => {
      const stateTagsReducer = tagsReducer(store.getState().tags, action);
      expect(Object.keys(stateTagsReducer)).to.have.lengthOf(1);
    });
  });
});
