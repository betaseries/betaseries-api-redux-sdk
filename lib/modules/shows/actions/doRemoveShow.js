import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove show
 *
 * **Dispatch**: `REMOVE_SHOW`
 *
 * @alias module:Shows.doRemoveShow
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRemoveShow')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @returns {Promise}
 */
const doRemoveShow = ({ showId }) =>
  dispatch =>
    ApiFetch.remove('shows/show', { id: showId }).then(response =>
      dispatch({
        type: constants.REMOVE_SHOW,
        payload: {
          showId,
          show: response.show
        }
      }));

export default doRemoveShow;
