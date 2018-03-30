import videosReducer from '../../../../lib/modules/shows/reducers/videos';

const actionFile = '../lib/modules/shows/actions/doFetchShowVideos';

describe('Retrieve videos of the show', () => {
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
        videos: 'videos list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SHOW_VIDEOS');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload.videos).to.deep.equal('videos list');
    });

    it('validate videos reducer', () => {
      const stateVideosReducer = videosReducer(undefined, action);
      expect(Object.keys(stateVideosReducer)).to.deep.equal(['10212']);
    });
  });
});
