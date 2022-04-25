import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Retrieve favorite movies of the member
 *
 * **Dispatch**: `FETCH_FAVORITE_MOVIES`
 *
 * @alias module:Movies.doFetchFavoriteMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchFavoriteMovies')({ memberId: 1 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    member ID
 * @param {Number}  [obj.start]       Used for paginate (`0` by default)
 * @param {Number}  [obj.limit]       Used for paginate (optional)
 * @param {String}  [obj.summary]     Only importanzt info (optional)
 * @returns {Promise}
 */
const doFetchFavoriteMovies = ({ memberId, ...props }) =>
  dispatch =>
    ApiFetch.get('movies/favorites', {
      id: memberId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_FAVORITE_MOVIES,
        payload: {
          ...props,
          memberId,
          movies: response.movies,
          total: response.total
        }
      }));

export default doFetchFavoriteMovies;
