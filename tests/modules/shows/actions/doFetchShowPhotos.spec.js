import photosReducer from '../../../../lib/modules/shows/reducers/photos';

const actionFile = '../lib/modules/shows/actions/doFetchShowPhotos';

describe('Retrieve photos of the show', () => {
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
        pictures: 'photos list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SHOW_PHOTOS');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload.photos).to.deep.equal('photos list');
    });

    it('validate photos reducer', () => {
      const statePhotosReducer = photosReducer(undefined, action);
      expect(Object.keys(statePhotosReducer)).to.deep.equal(['10212']);
    });
  });
});
