import showsSubtitlesReducer
  from '../../../../lib/modules/subtitles/reducers/shows';

const actionFile = '../lib/modules/subtitles/actions/doFetchSeasonSubtitles';

describe('Retrieve season subtitles', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with episode ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        subtitles: 'subtitles list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ showId: 10212, season: 3 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SEASON_SUBTITLES');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload.season).to.deep.equal(3);
      expect(action.payload.subtitles).to.deep.equal('subtitles list');
    });

    it('validate subtitles reducer', () => {
      const stateShowSubtitlesReducer = showsSubtitlesReducer(
        undefined,
        action
      );
      expect(Object.keys(stateShowSubtitlesReducer)).to.deep.equal(['10212']);
    });
  });
});
