import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select member from state
 *
 * @alias module:Members.getMemberSocioDemo
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getMemberSocioDemo')(state, {
 *     memberId: props.memberId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.memberId]    Member ID
 *
 * @returns {Object}                  Member element or `undefined`
 */
const getMemberSocioDemo = createSelector(
  [commons.getMembers, commons.getMemberId],
  (members, memberId) => {
    const member = !Object.prototype.hasOwnProperty.call(members, memberId)
      ? undefined
      : members[memberId];

    if (member) {
      return member.sociodemo;
    }

    return undefined;
  }
);

export default getMemberSocioDemo;
