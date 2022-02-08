import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Add comment on show
 *
 * **Dispatch**: `COMMENT_SHOW`
 *
 * @alias module:Comments.doCommentShowPost
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentShowPost')({
 *   showId: 438,
 *   text: 'Trop bien cette série !',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {String}  [obj.text]        Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentShowPost = ({ showId, text, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'comments/comment',
      {
        ...props,
        id: showId,
        type: 'show'
      },
      {
        text
      }
    ).then(response =>
      dispatch({
        type: constants.COMMENT_SHOW,
        payload: {
          ...props,
          showId,
          text,
          comment: response.comment
        }
      }));

export default doCommentShowPost;
