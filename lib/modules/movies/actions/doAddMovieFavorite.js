import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add movie to favorite
 *
 * **Dispatch**: `ADD_MOVIE_FAVORITE`
 *
 * @alias module:Movis.doAddMovieFavorite
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doAddMovieFavorite')({
 *   movieId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]     Movie ID
 * @returns {Promise}
 */
const doAddMovieFavorite = ({ movieId }) =>
  dispatch =>
    ApiFetch.post('movies/favorite', { id: movieId }).then(response =>
      dispatch({
        type: constants.ADD_MOVIE_FAVORITE,
        payload: {
          movieId,
          movie: response.movie
        }
      }));

export default doAddMovieFavorite;
