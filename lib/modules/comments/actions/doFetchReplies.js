import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc'
};

/**
 * Retrieve replies from a comment
 *
 * **Dispatch**: `FETCH_REPLIES`
 *
 * @alias module:Comments.doFetchReplies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchReplies')({ commentId: 438 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.commentId]   Comment ID
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 *
 * @returns {Promise}
 */
const doFetchReplies = ({ commentId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/replies', {
      ...defaultProps,
      ...props,
      id: commentId
    }).then(response =>
      dispatch({
        type: constants.FETCH_REPLIES,
        payload: {
          ...props,
          commentId,
          comments: response.comments
        }
      }));

export default doFetchReplies;
