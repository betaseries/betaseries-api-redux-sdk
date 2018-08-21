import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add comment on poll
 *
 * **Dispatch**: `COMMENT_POLL`
 *
 * @alias module:Comments.doCommentPoll
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentPoll')({
 *   pollId: 438,
 *   text: 'Trop bien cette épisode !',
 * });
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Number}  [obj.pollId]   Poll ID
 * @param {String}  [obj.text]     Text of comment
 *
 * @returns {Promise}
 */
const doCommentPoll = ({ pollId, text }) =>
  dispatch =>
    ApiFetch.post('comments/comment', {
      id: pollId,
      type: 'sondage',
      text
    }).then(response =>
      dispatch({
        type: constants.COMMENT_POLL,
        payload: {
          pollId,
          text,
          comment: response.comment
        }
      }));

export default doCommentPoll;
