import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove tag for a movie
 *
 * **Dispatch**: `DELETE_MOVIE_TAG`
 *
 * @alias module:Movies.doRemoveMovieTag
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doRemoveMovieTag')({
 *   movieId: 438,
 *   tag: 'animation'
 * });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.movieId]  Movie ID
 * @param {String}  [obj.tag]     Tag ou tags à supprimer séparés par une virgule
 * @returns {Promise}
 */
const doRemoveMovieTag = ({ movieId, tag, ...props }) =>
  dispatch =>
    ApiFetch.remove('tags/tag', {
      movie_id: movieId,
      tag,
      ...props
    }).then(response =>
      dispatch({
        type: constants.DELETE_MOVIE_TAG,
        payload: {
          movieId,
          tag,
          ...props,
          tags: response.tags || []
        }
      }));

export default doRemoveMovieTag;
