import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unmark show as watched
 *
 * **Dispatch**: `UNMARK_SHOW_AS_WATCHED`
 *
 * @alias module:Shows.doUnmarkShowAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkShowAsWatched')({ id: '1275' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.id]        List of shows IDs, separated by commas
 *
 * @returns {Promise}
 */
const doUnmarkShowAsWatched = ({ id }) =>
  dispatch =>
    ApiFetch.remove('shows/watch', {
      id
    }).then(response =>
      dispatch({
        type: constants.UNMARK_SHOW_AS_WATCHED,
        payload: {
          id,
          shows: response.shows || (response.show ? [response.show] : [])
        }
      }));

export default doUnmarkShowAsWatched;
