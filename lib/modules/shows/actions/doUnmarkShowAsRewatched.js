import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unmark show as rewatched
 *
 * **Dispatch**: `UNMARK_SHOW_AS_REWATCHED`
 *
 * @alias module:Shows.doUnmarkShowAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkShowAsRewatched')({ id: '1275' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.id]        List of shows IDs, separated by commas
 *
 * @returns {Promise}
 */
const doUnmarkShowAsRewatched = ({ id }) =>
  dispatch =>
    ApiFetch.remove('shows/rewatch', {
      id
    }).then(response =>
      dispatch({
        type: constants.UNMARK_SHOW_AS_REWATCHED,
        payload: {
          id,
          shows: response.shows || (response.show ? [response.show] : [])
        }
      }));

export default doUnmarkShowAsRewatched;
