import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove comment
 *
 * **Dispatch**: `REMOVE_COMMENT`
 *
 * @alias module:Comments.doRemoveComment
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doRemoveComment')({ commentId: 438 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.commentId]   Comment ID
 *
 * @returns {Promise}
 */
const doRemoveComment = ({ commentId }) =>
  dispatch =>
    ApiFetch.remove('comments/comment', { id: commentId }).then(() =>
      dispatch({
        type: constants.REMOVE_COMMENT,
        payload: {
          commentId
        }
      }));

export default doRemoveComment;
