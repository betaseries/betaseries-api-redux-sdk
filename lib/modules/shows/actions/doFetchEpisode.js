import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_EPISODE`
 *
 * @alias module:Shows.doFetchEpisode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchEpisode')({ episodeId: 123 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
const doFetchEpisode = ({ episodeId }) =>
  dispatch =>
    ApiFetch.get('episodes/display', { id: episodeId }).then(response =>
      dispatch({
        type: constants.FETCH_EPISODE,
        payload: {
          episodeId,
          episode: response.episode
        }
      }));

export default doFetchEpisode;
