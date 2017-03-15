import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

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
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.memberId]  member ID
 *
 * @returns {Promise}
 */
const doFetchFavoriteMovies = ({ memberId }) =>
  dispatch =>
    ApiFetch.get('movies/favorites', { id: memberId }).then(response =>
      dispatch({
        type: constants.FETCH_FAVORITE_MOVIES,
        payload: {
          memberId,
          movies: response.movies
        }
      }));

export default doFetchFavoriteMovies;
