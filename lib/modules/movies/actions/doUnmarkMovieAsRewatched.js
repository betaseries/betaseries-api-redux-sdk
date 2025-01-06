import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unmark movie as rewatched
 *
 * **Dispatch**: `UNMARK_MOVIE_AS_REWATCHED`
 *
 * @alias module:Movies.doUnmarkMovieAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doUnmarkMovieAsRewatched')({
 *   id: 438,
 *   all: 1,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Movie ids, separated by commas
 * @param {Number}  [obj.all]         All=1 means unmark all rewatched for that movie
 * @param {String}  [obj.date]        Unmark movie for specific date of rewatch
 *
 * @returns {Promise}
 */
const doUnmarkMovieAsRewatched = ({ ...props }) =>
  dispatch =>
    ApiFetch.remove('movies/rewatch', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.UNMARK_MOVIE_AS_REWATCHED,
        payload: {
          ...props,
          movie: response.movie || {},
          movies: response.movies || []
        }
      }));

export default doUnmarkMovieAsRewatched;
