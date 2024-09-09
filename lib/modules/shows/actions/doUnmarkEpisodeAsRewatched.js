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
 * @param {Number}  [obj.id]         Episode ids, separated by commas
 *
 * @returns {Promise}
 */
const doUnmarkEpisodeAsRewatched = ({ id }) =>
  dispatch => {
    dispatch({
      type: constants.UNMARK_EPISODE_AS_REWATCHED,
      payload: {
        id,
        seen: false
      }
    });

    return ApiFetch.remove('episodes/rewatch', { id });
  };

export default doUnmarkEpisodeAsRewatched;
