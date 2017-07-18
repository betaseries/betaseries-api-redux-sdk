import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add comment on event
 *
 * **Dispatch**: `COMMENT_EVENT`
 *
 * @alias module:Comments.doCommentEvent
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentEvent')({
 *   eventId: 438,
 *   text: 'Trop bien cette épisode !',
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.eventId]   Event ID
 * @param {String}  [obj.text]      Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentEvent = ({ eventId, text, ...props }) =>
  dispatch =>
    ApiFetch.post('comments/comment', {
      ...props,
      id: eventId,
      type: 'event',
      text
    }).then(response =>
      dispatch({
        type: constants.COMMENT_EVENT,
        payload: {
          ...props,
          eventId,
          text,
          comment: response.comment
        }
      }));

export default doCommentEvent;
