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
 *
 * @returns {Promise}
 */
const doCommentEvent = ({ eventId, text }) =>
  dispatch =>
    ApiFetch.post('comments/comment', {
      id: eventId,
      type: 'event',
      text
    }).then(response =>
      dispatch({
        type: constants.COMMENT_EVENT,
        payload: {
          eventId,
          text,
          comment: response.comment
        }
      }));

export default doCommentEvent;
