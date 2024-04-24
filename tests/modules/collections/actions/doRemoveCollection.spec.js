import collectionsReducer
  from '../../../../lib/modules/collections/reducers/collections';

const actionFile = '../lib/modules/collections/actions/doRemoveCollection';

describe('delete collection', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => promise }
    }).default;
  }

  describe('call api', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        collections: [
          {
            id: 189
          }
        ]
      })
    );

    const store = mockStore({ collections: [] });

    before(async () => {
      action = await store.dispatch(actionToDispatch({ id: 189 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('DELETE_COLLECTION');
      expect(action.payload.collections || []).to.deep.equal([]);
    });

    it('validate collections reducer', () => {
      const stateCollectionsReducer = collectionsReducer(
        store.getState().collections,
        action
      );
      expect(stateCollectionsReducer).to.deep.equal([]);
    });
  });
});
