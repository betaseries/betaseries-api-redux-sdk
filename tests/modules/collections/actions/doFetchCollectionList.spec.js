import collectionsReducer
  from '../../../../lib/modules/collections/reducers/collections';

const actionFile = '../lib/modules/collections/actions/doFetchCollectionList';

describe('Retrieve collection list', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
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

    const store = mockStore({
      collections: [
        {
          id: 189
        }
      ]
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_COLLECTIONS_LIST');
      expect(action.payload.memberId).to.deep.equal(1);
      expect(action.payload.collections).to.have.lengthOf(1);
    });

    it('validate collections reducer', () => {
      const stateCollectionsReducer = collectionsReducer(
        store.getState().collections,
        action
      );
      expect(stateCollectionsReducer).to.deep.equal([
        {
          id: 189
        }
      ]);
    });
  });
});
