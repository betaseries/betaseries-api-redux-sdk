import constants from '../constants';

/**
 * Clear comments for a specific member
 *
 * **Dispatch**: `CLEAR_MEMBER_COMMENTS`
 *
 * @alias module:Comments.doClearMemberComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doClearMemberComments')({ memberId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    MemberID
 *
 * @returns {Promise}
 */
const doClearMemberComments = ({ memberId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_MEMBER_COMMENTS,
      payload: {
        memberId
      }
    });

export default doClearMemberComments;
