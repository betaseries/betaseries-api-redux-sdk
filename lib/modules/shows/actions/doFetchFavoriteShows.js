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
 * @param {Number}  [obj.offset]    Start number of show list (default `0`)
 * @param {Number}  [obj.limit]     Limit number of shows
 * @param {String}  [obj.summary]   Only importanzt info (optional)
 *
 * @returns {Promise}
 */
const doFetchFavoriteShows = (
  { memberId = BetaSeries.user.userId, ...props } = {}
) =>
  dispatch =>
    ApiFetch.get('shows/favorites', { id: memberId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_FAVORITE_SHOWS,
        payload: {
          ...props,
          memberId,
          total: response.total,
          shows: response.shows
        }
      }));

export default doFetchFavoriteShows;
