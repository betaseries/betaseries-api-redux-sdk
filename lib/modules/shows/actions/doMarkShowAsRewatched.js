import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark show as rewatched
 *
 * **Dispatch**: `MARK_SHOW_AS_REWATCHED`
 *
 * @alias module:Shows.doMarkShowAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkShowAsRewatched')({ id: '1275' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.id]        List of shows IDs, separated by commas
 *
 * @returns {Promise}
 */
const doMarkShowAsRewatched = ({ id }) =>
  dispatch =>
    ApiFetch.post(
      'shows/rewatch',
      {},
      {
        id
      }
    ).then(response =>
      dispatch({
        type: constants.MARK_SHOW_AS_REWATCHED,
        payload: {
          id,
          shows: response.shows || (response.show ? [response.show] : [])
        }
      }));

export default doMarkShowAsRewatched;
