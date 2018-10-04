import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comment of the poll
 *
 * **Dispatch**: `FETCH_POLL_COMMENTS`
 *
 * @alias module:Comments.doFetchPollComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchPollComments')({ pollId: 42315431 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.pollId]      Poll ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchPollComments = ({ pollId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: pollId,
      ...defaultProps,
      ...props,
      type: 'sondage'
    }).then(response =>
      dispatch({
        type: constants.FETCH_POLL_COMMENTS,
        payload: {
          ...props,
          pollId,
          ...response
        }
      }));

export default doFetchPollComments;
