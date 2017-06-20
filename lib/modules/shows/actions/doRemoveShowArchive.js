import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove show from archives
 *
 * **Dispatch**: `REMOVE_SHOW_ARCHIVE`
 *
 * @alias module:Shows.doRemoveShowArchive
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRemoveShowArchive')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @returns {Promise}
 */
const doRemoveShowArchive = ({ showId }) =>
  dispatch =>
    ApiFetch.remove('shows/archive', { id: showId }).then(response =>
      dispatch({
        type: constants.REMOVE_SHOW_ARCHIVE,
        payload: {
          showId,
          show: response.show
        }
      }));

export default doRemoveShowArchive;
