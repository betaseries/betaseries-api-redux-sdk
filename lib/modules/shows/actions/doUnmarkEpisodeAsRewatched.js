import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unmark episode as rewatched
 *
 * **Dispatch**: `UNMARK_EPISODE_AS_REWATCHED`
 *
 * @alias module:Shows.doUnmarkEpisodeAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkEpisodeAsRewatched')({
 *   id: 438,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Episode ids, separated by commas
 * @param {Number}  [obj.all]         All=1 means unmark all rewatched for that episode
 * @param {String}  [obj.date]        Unmark episode for specific date of rewatch
 *
 * @returns {Promise}
 */
const doUnmarkEpisodeAsRewatched = ({ ...props }) =>
  dispatch => {
    dispatch({
      type: constants.UNMARK_EPISODE_AS_REWATCHED,
      payload: {
        ...props,
        seen: false
      }
    });

    return ApiFetch.remove('episodes/rewatch', { ...props });
  };

export default doUnmarkEpisodeAsRewatched;
