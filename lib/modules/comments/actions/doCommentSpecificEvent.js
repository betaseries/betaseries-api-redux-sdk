import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add specific comment on event
 *
 * **Dispatch**: `COMMENT_EVENT`
 *
 * @alias module:Comments.doCommentSpecificEvent
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentSpecificEvent')({
 *   id: 438,
 *   text: 'Trop bien cet épisode !',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Event ID (optional)
 * @param {String}  [obj.type]        Element type in the event (optional)
 * @param {Number}  [obj.element_id]  Element ID in the event (optional)
 * @param {String}  [obj.text]        Text of comment
 *
 * @returns {Promise}
 */
const doCommentSpecificEvent = ({ text, ...props }) =>
  dispatch =>
    ApiFetch.post('comments/comment_event', {
      ...props,
      text
    }).then(response =>
      dispatch({
        type: constants.COMMENT_EVENT,
        payload: {
          ...props,
          text,
          eventId: (response.comment || {}).ref_id,
          comment: response.comment
        }
      }));

export default doCommentSpecificEvent;
