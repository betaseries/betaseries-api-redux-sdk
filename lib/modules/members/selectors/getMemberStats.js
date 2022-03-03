import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select member from state
 *
 * @alias module:Members.getMemberStats
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getMemberStats')(state, {
 *     userId: props.userId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.userId]      User ID
 *
 * @returns {Object}                  Member element or `undefined`
 */
const getMemberStats = createSelector(
  [commons.getMembers, commons.getUserId],
  (members, userId) => {
    const member = !Object.prototype.hasOwnProperty.call(members, userId)
      ? undefined
      : members[userId];

    if (member) {
      return member.memberStats;
    }

    return undefined;
  }
);

export default getMemberStats;
