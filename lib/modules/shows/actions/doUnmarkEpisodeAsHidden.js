import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Unmark episode as hidden
 *
 * **Dispatch**: `UNMARK_EPISODE_AS_HIDDEN`
 *
 * @alias module:Shows.doUnmarkEpisodeAsHidden
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkEpisodeAsHidden')({ episodeId: 123 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doUnmarkEpisodeAsHidden = ({ episodeId }) =>
  dispatch =>
    ApiFetch.remove('episodes/hidden', {
      id: episodeId
    }).then(() => {
      dispatch({
        type: constants.UNMARKED_EPISODE_AS_HIDDEN,
        payload: {
          episodeIds: [episodeId]
        }
      });
    });

export default doUnmarkEpisodeAsHidden;
