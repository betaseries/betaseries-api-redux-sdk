import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Archive show
 *
 * **Dispatch**: `ADD_SHOW_ARCHIVE`
 *
 * @alias module:Shows.doAddShowArchive
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShowArchive')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @returns {Promise}
 */
const doAddShowArchive = ({ showId }) =>
  dispatch =>
    ApiFetch.post('shows/archive', { id: showId }).then(response =>
      dispatch({
        type: constants.ADD_SHOW_ARCHIVE,
        payload: {
          showId,
          show: response.show
        }
      }));

export default doAddShowArchive;
