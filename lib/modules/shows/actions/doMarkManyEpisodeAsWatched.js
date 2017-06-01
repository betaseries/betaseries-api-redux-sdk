import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark many episode as watch
 *
 * **Dispatch**: `MARK_MANY_EPISODE_AS_WATCHED`
 *
 * @alias module:Shows.doMarkManyEpisodeAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkManyEpisodeAsWatched')({
 *   episodeIds: 438,
 *   bulk: false,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeIds]  Episodes ID
 * @param {Boolean} [obj.bulk]        Mark as watched previous episodes
 * @param {Boolean} [obj.delete]      Unmark as watched next episodes
 *
 * @returns {Promise}
 */
const doMarkManyEpisodeAsWatched = ({ episodeIds, bulk = true, ...props }) =>
  dispatch =>
    ApiFetch.post('episodes/watched', {
      id: episodeIds.join(','),
      bulk,
      ...props
    }).then(() => {
      dispatch({
        type: constants.MARK_MANY_EPISODE_AS_WATCHED,
        payload: {
          ...props,
          episodeIds,
          seen: true
        }
      });
    });

export default doMarkManyEpisodeAsWatched;
