import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add note on movie
 *
 * **Dispatch**: `RATE_MOVIE`
 *
 * @alias module:Movies.doRateMovie
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doRateMovie')({
 *   movieId: 438,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 * @param {Number}  [obj.note]      Note (from `1` to `5`)
 *
 * @returns {Promise}
 */
const doRateMovie = ({ movieId, note }) =>
  dispatch =>
    ApiFetch.post('movies/note', { id: movieId, note }).then(response =>
      dispatch({
        type: constants.RATE_MOVIE,
        payload: {
          movieId,
          note,
          movie: response.movie
        }
      }));

export default doRateMovie;
