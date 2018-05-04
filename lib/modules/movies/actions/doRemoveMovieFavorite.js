import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove movie from favorite
 *
 * **Dispatch**: `REMOVE_MOVIE_FAVORITE`
 *
 * @alias module:Movies.doRemoveMovieFavorite
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doRemoveMovieFavorite')({
 *   movieId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]     Movie ID
 * @returns {Promise}
 */
const doRemoveMovieFavorite = ({ movieId }) =>
  dispatch =>
    ApiFetch.remove('movies/favorite', { id: movieId }).then(response =>
      dispatch({
        type: constants.REMOVE_MOVIE_FAVORITE,
        payload: {
          movieId,
          movie: response.movie
        }
      }));

export default doRemoveMovieFavorite;
