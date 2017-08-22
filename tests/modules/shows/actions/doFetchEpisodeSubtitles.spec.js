import episodesSubtitlesReducer
  from '../../../../lib/modules/shows/reducers/episodesSubtitles';

const actionFile = '../lib/modules/shows/actions/doFetchEpisodeSubtitles';

describe('Retrieve episode subtitles', () => {
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
      action = await store.dispatch(actionToDispatch({ episodeId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_EPISODE_SUBTITLES');
      expect(action.payload.episodeId).to.deep.equal(10212);
      expect(action.payload.subtitles).to.deep.equal('subtitles list');
    });

    it('validate characters reducer', () => {
      const stateEpisodesSubtitlesReducer = episodesSubtitlesReducer(
        undefined,
        action
      );
      expect(Object.keys(stateEpisodesSubtitlesReducer)).to.deep.equal([
        '10212'
      ]);
    });
  });
});
