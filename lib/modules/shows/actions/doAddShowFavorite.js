import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add show to favorite
 *
 * **Dispatch**: `ADD_SHOW_FAVORITE`
 *
 * @alias module:Shows.doAddShowFavorite
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShowFavorite')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @returns {Promise}
 */
const doAddShowFavorite = ({ showId }) =>
  dispatch =>
    ApiFetch.post('shows/favorite', { id: showId }).then(response =>
      dispatch({
        type: constants.ADD_SHOW_FAVORITE,
        payload: {
          showId,
          show: response.show
        }
      }));

export default doAddShowFavorite;
