import collectionsSubscribedReducer
  from '../../../../lib/modules/collections/reducers/subscribed';

const actionFile = '../lib/modules/collections/actions/doFetchSubscribedCollectionList';

describe('Retrieve subscribed collection list', () => {
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
        collectionsSubscribed: {
          1: [
            {
              id: 189
            }
          ]
        }
      })
    );

    const store = mockStore({
      collectionsSubscribed: {
        1: [
          {
            id: 189
          }
        ]
      }
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch({ user_id: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SUBSCRIBED_COLLECTIONS_LIST');
      expect(action.payload.memberId).to.deep.equal(1);
    });

    it('validate collections reducer', () => {
      const stateCollectionsReducer = collectionsSubscribedReducer(
        store.getState().collectionsSubscribed,
        action
      );
      expect(stateCollectionsReducer[1]).to.deep.equal([]);
    });
  });
});
