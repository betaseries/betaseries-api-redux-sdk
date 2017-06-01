import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve movie
 *
 * **Dispatch**: `FETCH_MOVIE`
 *
 * @alias module:Movies.doFetchMovie
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMovie')({ movieId: 438 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
const doFetchMovie = ({ movieId }) =>
  dispatch =>
    ApiFetch.get('movies/movie', { id: movieId }).then(response =>
      dispatch({
        type: constants.FETCH_MOVIE,
        payload: {
          movieId,
          movie: response.movie
        }
      }));

export default doFetchMovie;
