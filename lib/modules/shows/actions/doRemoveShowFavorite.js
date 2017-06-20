import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove show from favorite
 *
 * **Dispatch**: `REMOVE_SHOW_FAVORITE`
 *
 * @alias module:Shows.doRemoveShowFavorite
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRemoveShowFavorite')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @returns {Promise}
 */
const doRemoveShowFavorite = ({ showId }) =>
  dispatch =>
    ApiFetch.remove('shows/favorite', { id: showId }).then(response =>
      dispatch({
        type: constants.REMOVE_SHOW_FAVORITE,
        payload: {
          showId,
          show: response.show
        }
      }));

export default doRemoveShowFavorite;
