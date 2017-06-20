import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Watch episode
 *
 * **Dispatch**: `MARK_EPISODE_AS_WATCHED`
 *
 * @alias module:Shows.doUnmarkEpisodeAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkEpisodeAsWatched')({
 *   episodeId: 438,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doUnmarkEpisodeAsWatched = ({ episodeId }) =>
  dispatch => {
    dispatch({
      type: constants.UNMARK_EPISODE_AS_WATCHED,
      payload: {
        episodeId,
        seen: false
      }
    });

    return ApiFetch.remove('episodes/watched', { id: episodeId });
  };

export default doUnmarkEpisodeAsWatched;
