import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark episode as hidden
 *
 * **Dispatch**: `MARK_EPISODE_AS_HIDDEN`
 *
 * @alias module:Shows.doMarkEpisodeAsHidden
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkEpisodeAsHidden')({ episodeId: 123 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doMarkEpisodeAsHidden = ({ episodeId }) =>
  dispatch => {
    dispatch({
      type: constants.MARK_EPISODE_AS_HIDDEN,
      payload: {
        episodeIds: [episodeId]
      }
    });

    return ApiFetch.post('episodes/hidden', {
      id: episodeId
    });
  };

export default doMarkEpisodeAsHidden;
