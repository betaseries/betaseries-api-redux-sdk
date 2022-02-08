import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Add comment on movie
 *
 * **Dispatch**: `COMMENT_MOVIE`
 *
 * @alias module:Comments.doCommentMoviePost
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentMoviePost')({
 *   movieId: 438,
 *   text: 'Trop bien ce film !',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]     Movie ID
 * @param {String}  [obj.text]        Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentMoviePost = ({ movieId, text, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'comments/comment',
      {
        ...props,
        id: movieId,
        type: 'movie'
      },
      {
        text
      }
    ).then(response =>
      dispatch({
        type: constants.COMMENT_MOVIE,
        payload: {
          ...props,
          movieId,
          text,
          comment: response.comment
        }
      }));

export default doCommentMoviePost;
