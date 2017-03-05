import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

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
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.memberId]  member ID
 *
 * @returns {Promise}
 */
const doFetchFavoriteShows = ({ memberId }) => dispatch => (
  ApiFetch.get('shows/favorites', { id: memberId })
    .then(response => (
      dispatch({
        type: constants.FETCH_FAVORITE_SHOWS,
        payload: {
          memberId,
          shows: response.shows,
        },
      })
    ))
);

export default doFetchFavoriteShows;
