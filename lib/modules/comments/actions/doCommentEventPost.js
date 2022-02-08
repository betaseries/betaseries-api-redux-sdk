import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Add comment on event
 *
 * **Dispatch**: `COMMENT_EVENT`
 *
 * @alias module:Comments.doCommentEventPost
 * 
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentEventPost
 * ')({
 *   eventId: 438,
 *   text: 'Trop bien cette épisode !',
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.eventId]   Event ID
 * @param {String}  [obj.text]      Text of comment
 *
 * @returns {Promise}
 */
const doCommentEventPost = ({ eventId, text, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'comments/comment',
      {
        ...props,
        id: eventId,
        type: 'event'
      },
      {
        text
      }
    ).then(response =>
      dispatch({
        type: constants.COMMENT_EVENT,
        payload: {
          ...props,
          eventId,
          text,
          comment: response.comment
        }
      }));

export default doCommentEventPost;
