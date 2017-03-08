import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_EPISODE_BY_CODE`
 *
 * @alias module:Shows.doFetchEpisodeByCode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchEpisodeByCode')({ showId: 123, code: 'SO3E15' });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.showId]      Episode ID
 * @param {String}  [obj.code]        Episode code like `SO3E15`
 *
 * @returns {Promise}
 */
const doFetchEpisodeByCode = ({ showId, code }) => dispatch => (
  ApiFetch.get('episodes/search', { show_id: showId, number: code })
    .then(response => (
      dispatch({
        type: constants.FETCH_EPISODE_BY_CODE,
        payload: {
          showId,
          code,
          episode: response.episode,
        },
      })
    ))
);

export default doFetchEpisodeByCode;
