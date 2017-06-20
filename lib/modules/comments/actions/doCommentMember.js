import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add comment on member
 *
 * **Dispatch**: `COMMENT_MEMBER`
 *
 * @alias module:Comments.doCommentMember
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentMember')({
 *   memberId: 438,
 *   text: 'Trop bien cette série !',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    Member ID
 * @param {String}  [obj.text]        Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentMember = ({ memberId, text, ...props }) =>
  dispatch =>
    ApiFetch.post('comments/comment', {
      ...props,
      id: memberId,
      type: 'member',
      text
    }).then(response =>
      dispatch({
        type: constants.COMMENT_MEMBER,
        payload: {
          ...props,
          memberId,
          text,
          comment: response.comment
        }
      }));

export default doCommentMember;
