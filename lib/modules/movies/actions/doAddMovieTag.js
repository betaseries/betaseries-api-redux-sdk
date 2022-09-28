import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add tag to a movie
 *
 * **Dispatch**: `POST_MOVIE_TAG`
 *
 * @alias module:Movies.doAddMovieTag
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doAddMovieTag')({
 *   movieId: 438,
 *   tag: 'animation',
 * });
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Number}  [obj.movieId]  Movie ID
 * @param {String}  [obj.tag]      Tag ou tags à ajouter séparés par une virgule
 *
 * @returns {Promise}
 */
const doAddMovieTag = ({ movieId, tag, ...props }) =>
  dispatch =>
    ApiFetch.post('tags/tag', {
      movie_id: movieId,
      tag,
      ...props
    }).then(response =>
      dispatch({
        type: constants.POST_MOVIE_TAG,
        payload: {
          movieId,
          tag,
          ...props,
          tags: response.tags || []
        }
      }));

export default doAddMovieTag;
