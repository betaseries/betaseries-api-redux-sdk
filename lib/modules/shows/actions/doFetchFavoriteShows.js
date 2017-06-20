import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import BetaSeries from '../../../betaseries';

/**
 * Retrieve favorite shows of the member
 *
 * **Dispatch**: `FETCH_FAVORITE_SHOWS`
 *
 * @alias module:Shows.doFetchFavoriteShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchFavoriteShows')({ memberId: 1 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.memberId]  member ID
 *
 * @returns {Promise}
 */
const doFetchFavoriteShows = ({ memberId = BetaSeries.user.userId } = {}) =>
  dispatch =>
    ApiFetch.get('shows/favorites', { id: memberId }).then(response =>
      dispatch({
        type: constants.FETCH_FAVORITE_SHOWS,
        payload: {
          memberId,
          shows: response.shows
        }
      }));

export default doFetchFavoriteShows;
