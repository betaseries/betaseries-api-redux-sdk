import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comment of the episode
 *
 * **Dispatch**: `FETCH_EPISODE_COMMENTS`
 *
 * @alias module:Comments.doFetchEventComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchEventComments')({ eventId: 42315431 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.eventId]     Event ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchEventComments = ({ eventId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: eventId,
      ...defaultProps,
      ...props,
      type: 'event'
    }).then(response =>
      dispatch({
        type: constants.FETCH_EVENT_COMMENTS,
        payload: {
          ...props,
          eventId,
          comments: response.comments
        }
      }));

export default doFetchEventComments;
