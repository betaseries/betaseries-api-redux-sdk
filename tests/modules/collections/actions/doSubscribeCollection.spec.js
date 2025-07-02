const actionFile = '../lib/modules/collections/actions/doSubscribeCollection';
const collectionsFixture = require('../../../fixtures/collections.json');

describe('Subscribe to collection', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with collection ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        collection: collectionsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ id: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('SUBSCRIBE_COLLECTION');
      expect(action.payload.collection.id).to.deep.equal(10212);
      expect(action.payload.collection).to.be.an('object');
    });
  });
});
