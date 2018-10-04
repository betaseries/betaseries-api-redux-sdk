import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add subscription to comments on a media
 *
 * **Dispatch**: `ADD_COMMENT_SUBSCRIPTION`
 *
 * @alias module:Comments.doAddCommentSubscription
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doAddCommentSubscription')({
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
const doAddCommentSubscription = ({ id, type }) =>
  dispatch =>
    ApiFetch.post('comments/subscription', {
      id,
      type
    }).then(() =>
      dispatch({
        type: constants.ADD_COMMENT_SUBSCRIPTION,
        payload: {
          id,
          type
        }
      }));

export default doAddCommentSubscription;
