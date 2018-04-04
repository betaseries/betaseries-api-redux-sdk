import similarsReducer from '../../../../lib/modules/shows/reducers/similars';

const actionFile = '../lib/modules/shows/actions/doFetchSimilarShows';

describe('Retrieve similar shows', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        similars: [
          {
            id: 1,
            show_id: 10
          },
          {
            id: 1,
            show_id: 20
          }
        ]
      })
    );

    before(async () => {
      const store = mockStore({
        showsSimilars: {}
      });

      action = await store.dispatch(actionToDispatch({ showId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SIMILAR_SHOWS');
      expect(action.payload.showId).to.deep.equal(1);
      expect(action.payload.similars).to.have.lengthOf(2);
    });

    it('validate similars reducer', () => {
      const stateSimilarsReducer = similarsReducer(undefined, action);
      expect(stateSimilarsReducer).to.have.ownProperty('1');
      expect(stateSimilarsReducer[1]).to.have.lengthOf(2);
    });
  });
});
