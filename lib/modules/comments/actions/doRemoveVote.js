import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove vote on a comment
 *
 * **Dispatch**: `REMOVE_COMMENT_VOTE`
 *
 * @alias module:Comments.doRemoveVote
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doRemoveVote')({ commentId: 438 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.commentId]   Comment ID
 *
 * @returns {Promise}
 */
const doRemoveVote = ({ commentId }) =>
  dispatch =>
    ApiFetch.remove('comments/thumb', { id: commentId }).then(response =>
      dispatch({
        type: constants.REMOVE_COMMENT_VOTE,
        payload: {
          commentId,
          comment: response.comment
        }
      }));

export default doRemoveVote;
