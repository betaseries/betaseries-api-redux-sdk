import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Rewatch movie
 *
 * **Dispatch**: `MARK_MOVIE_AS_REWATCHED`
 *
 * @alias module:Movies.doMarkMovieAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doMarkMovieAsRewatched')({
 *   id: 438,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Movie ID, multiple movies ids separated by commas
 * @param {Number}  [obj.note]        Note for movie
 *
 * @returns {Promise}
 */
const doMarkMovieAsRewatched = ({ id, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'movies/rewatch',
      {},
      {
        id,
        ...props
      }
    ).then(response =>
      dispatch({
        type: constants.MARK_MOVIE_AS_REWATCHED,
        payload: {
          ...props,
          id,
          movie: response.movie || {},
          movies: response.movies || []
        }
      }));

export default doMarkMovieAsRewatched;
