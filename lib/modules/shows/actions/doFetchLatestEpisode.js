import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_LATEST_EPISODE`
 *
 * @alias module:Shows.doFetchLatestEpisode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchLatestEpisode')({ showId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 *
 * @returns {Promise}
 */
const doFetchLatestEpisode = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('episodes/latest', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_LATEST_EPISODE,
        payload: {
          ...props,
          showId,
          episode: response.episode
        }
      }));

export default doFetchLatestEpisode;
