import seasonsReducer from '../../../../lib/modules/shows/reducers/seasons';

const actionFile = '../lib/modules/shows/actions/doFetchShowSeasons';

describe('Retrieve seasons', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with showId', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        seasons: [
          {
            number: 1,
            episodes: 10,
            seen: false
          },
          {
            number: 2,
            episodes: 10,
            seen: false
          }
        ]
      })
    );

    before(async () => {
      const store = mockStore({
        showsSeasons: {}
      });

      action = await store.dispatch(actionToDispatch({ showId: 1275 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SEASONS');
      expect(action.payload.showId).to.deep.equal(1275);
      expect(action.payload.seasons).to.have.lengthOf(2);
    });

    it('validate seasons reducer', () => {
      const stateSeasonsReducer = seasonsReducer(undefined, action);
      expect(Object.keys(stateSeasonsReducer)).to.deep.equal(['1275']);
    });
  });
});
