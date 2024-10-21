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
 * @param {Number}  [obj.all]       All=1 means unmark all rewatched for that serie
 *
 * @returns {Promise}
 */
const doUnmarkShowAsRewatched = ({ id, ...props }) =>
  dispatch =>
    ApiFetch.remove('shows/rewatch', {
      id,
      ...props
    }).then(response =>
      dispatch({
        type: constants.UNMARK_SHOW_AS_REWATCHED,
        payload: {
          id,
          ...props,
          shows: response.shows || (response.show ? [response.show] : [])
        }
      }));

export default doUnmarkShowAsRewatched;
