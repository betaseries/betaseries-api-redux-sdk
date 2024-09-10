import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark show as watched
 *
 * **Dispatch**: `MARK_SHOW_AS_WATCHED`
 *
 * @alias module:Shows.doMarkShowAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkShowAsWatched')({ id: '1275' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.id]        List of shows IDs, separated by commas
 *
 * @returns {Promise}
 */
const doMarkShowAsWatched = ({ id }) =>
  dispatch =>
    ApiFetch.post(
      'shows/watch',
      {},
      {
        id
      }
    ).then(response =>
      dispatch({
        type: constants.MARK_SHOW_AS_WATCHED,
        payload: {
          id,
          shows: response.shows || (response.show ? [response.show] : [])
        }
      }));

export default doMarkShowAsWatched;
