import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select member from state
 *
 * @alias module:Members.getMember
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getMember')(state, {
 *     memberId: props.memberId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.memberId]    Member ID
 *
 * @returns {Object}                  Member element or `null`
 */
const getMember = createSelector(
  [commons.getMembers, commons.getMemberId],
  (members, memberId) => (
    !Object.prototype.hasOwnProperty.call(members, memberId) ? null : (
      members[memberId]
    )
  ),
);

export default getMember;
