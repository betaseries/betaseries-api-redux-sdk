import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add note on show
 *
 * **Dispatch**: `RATE_SHOW`
 *
 * @alias module:Shows.doRateShow
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRateShow')({
 *   showId: 438,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.movieId]   Show ID
 * @param {Number}  [obj.note]      Note (from `1` to `5`)
 *
 * @returns {Promise}
 */
const doRateShow = ({ showId, note }) =>
  dispatch =>
    ApiFetch.post('shows/note', { id: showId, note }).then(response =>
      dispatch({
        type: constants.RATE_SHOW,
        payload: {
          showId,
          note,
          show: response.show
        }
      }));

export default doRateShow;
