import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve episode subtitles
 *
 * **Dispatch**: `FETCH_EPISODE_SUBTITLES`
 *
 * @alias module:Subtitles.doFetchEpisodeSubtitles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('subtitles', 'doFetchEpisodeSubtitles')({ episodeId: 123 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doFetchEpisodeSubtitles = ({ episodeId }) =>
  dispatch =>
    ApiFetch.get('subtitles/episode', { id: episodeId }).then(response =>
      dispatch({
        type: constants.FETCH_EPISODE_SUBTITLES,
        payload: {
          episodeId,
          subtitles: response.subtitles
        }
      }));

export default doFetchEpisodeSubtitles;
