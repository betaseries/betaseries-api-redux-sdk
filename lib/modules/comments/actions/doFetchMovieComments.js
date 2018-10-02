import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comments of the movie
 *
 * **Dispatch**: `FETCH_MOVIE_COMMENTS`
 *
 * @alias module:Comments.doFetchMovieComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchMovieComments')({ movieId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]      Movie ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchMovieComments = ({ movieId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: movieId,
      ...defaultProps,
      ...props,
      type: 'movie'
    }).then(response =>
      dispatch({
        type: constants.FETCH_MOVIE_COMMENTS,
        payload: {
          ...props,
          movieId,
          status: response.status || 'open',
          comments: response.comments
        }
      }));

export default doFetchMovieComments;
