import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Watch episode
 *
 * **Dispatch**: `MARK_MANY_EPISODE_AS_WATCHED`
 *
 * @alias module:Shows.doUnmarkManyEpisodeAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkManyEpisodeAsWatched')({
 *   episodeIds: 438,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeIds]   Episodes ID
 *
 * @returns {Promise}
 */
const doUnmarkManyEpisodeAsWatched = ({ episodeIds }) =>
  dispatch => {
    dispatch({
      type: constants.UNMARK_MANY_EPISODE_AS_WATCHED,
      payload: {
        episodeIds,
        seen: false
      }
    });

    return ApiFetch.remove('episodes/watched', { id: episodeIds.join(',') });
  };

export default doUnmarkManyEpisodeAsWatched;
