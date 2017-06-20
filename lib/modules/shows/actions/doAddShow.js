import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add show
 *
 * **Dispatch**: `ADD_SHOW`
 *
 * @alias module:Shows.doAddShow
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShow')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.episode_id]  Episode ID
 * @returns {Promise}
 */
const doAddShow = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.post('shows/show', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.ADD_SHOW,
        payload: {
          ...props,
          showId,
          show: response.show
        }
      }));

export default doAddShow;
