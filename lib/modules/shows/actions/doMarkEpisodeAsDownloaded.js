import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Watch episode
 *
 * **Dispatch**: `MARK_EPISODE_AS_DOWNLOADED`
 *
 * @alias module:Shows.doMarkEpisodeAsDownloaded
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkEpisodeAsDownloaded')({
 *   episodeId: 438,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doMarkEpisodeAsDownloaded = ({ episodeId, ...props }) =>
  dispatch =>
    ApiFetch.post('episodes/downloaded', {
      id: episodeId,
      ...props
    }).then(() =>
      dispatch({
        type: constants.MARK_EPISODE_AS_DOWNLOADED,
        payload: {
          ...props,
          episodeId,
          downloaded: true
        }
      }));

export default doMarkEpisodeAsDownloaded;
