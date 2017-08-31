import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Downloaded episode
 *
 * **Dispatch**: `MARK_EPISODE_AS_DOWNLOADED`
 *
 * @alias module:Shows.doUnmarkEpisodeAsDownloaded
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkEpisodeAsDownloaded')({
 *   episodeId: 438,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doUnmarkEpisodeAsDownloaded = ({ episodeId }) =>
  dispatch =>
    ApiFetch.remove('episodes/downloaded', { id: episodeId }).then(() =>
      dispatch({
        type: constants.UNMARK_EPISODE_AS_DOWNLOADED,
        payload: {
          episodeId,
          downloaded: false
        }
      }));

export default doUnmarkEpisodeAsDownloaded;
