import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove subscription to comments on a media
 *
 * **Dispatch**: `REMOVE_COMMENT_SUBSCRIPTION`
 *
 * @alias module:Comments.doRemoveCommentSubscription
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doRemoveCommentSubscription')({
 *   id: 438,
 *   type: 'show',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Media ID
 * @param {String}  [obj.type]        Media type => episode|show|member|movie
  *
 * @returns {Promise}
 */
const doRemoveCommentSubscription = ({ id, type }) =>
  dispatch =>
    ApiFetch.remove('comments/subscription', {
      id,
      type
    }).then(() =>
      dispatch({
        type: constants.REMOVE_COMMENT_SUBSCRIPTION,
        payload: {
          id,
          type
        }
      }));

export default doRemoveCommentSubscription;
