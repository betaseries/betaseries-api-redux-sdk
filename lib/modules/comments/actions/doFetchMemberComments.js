import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comments of the member
 *
 * **Dispatch**: `FETCH_MEMBER_COMMENTS`
 *
 * @alias module:Comments.doFetchMemberComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchMemberComments')({ memberId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    Member ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchMemberComments = ({ memberId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: memberId,
      ...defaultProps,
      ...props,
      type: 'member'
    }).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER_COMMENTS,
        payload: {
          ...props,
          memberId,
          status: response.status || 'open',
          comments: response.comments
        }
      }));

export default doFetchMemberComments;
