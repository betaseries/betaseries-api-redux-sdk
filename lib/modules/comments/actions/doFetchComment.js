import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve comment
 *
 * **Dispatch**: `FETCH_COMMENT`
 *
 * @alias module:Comments.doFetchComment
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchComment')({ commentId: 438 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.commentId]   Comment ID
 *
 * @returns {Promise}
 */
const doFetchComment = ({ commentId }) =>
  dispatch =>
    ApiFetch.get('comments/comment', { id: commentId }).then(response =>
      dispatch({
        type: constants.FETCH_COMMENT,
        payload: {
          commentId,
          comment: response.comment
        }
      }));

export default doFetchComment;
