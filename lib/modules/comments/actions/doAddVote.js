import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add vote on a comment
 *
 * **Dispatch**: `ADD_COMMENT_VOTE`
 *
 * @alias module:Comments.doAddVote
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doAddVote')({
 *   commentId: 438,
 *   type: 1,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.commentId]   Comment ID
 * @param {Number}  [obj.type]        1 for a thumbs_up, -1 for a thumbs_down
 *
 * @returns {Promise}
 */
const doAddVote = ({ commentId, type }) =>
  dispatch =>
    ApiFetch.post('comments/thumb', {
      id: commentId,
      type
    }).then(response =>
      dispatch({
        type: constants.ADD_COMMENT_VOTE,
        payload: {
          commentId,
          type,
          comment: response.comment
        }
      }));

export default doAddVote;
