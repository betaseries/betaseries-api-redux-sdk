import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select notifications for a member from state
 *
 * @alias module:Members.getNotifications
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getNotifications')(state, { memberId: props.memberId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.memberId]    Member ID
 *
 * @returns {Array}                   Notifications array element or `undefined`
 */

const getNotifications = createSelector(
  [commons.getMembers, commons.getNotifications, commons.getMemberId],
  (members, membersNotifications, memberId) => {
    const notifications = !Object.prototype.hasOwnProperty.call(
      membersNotifications,
      memberId
    )
      ? null
      : membersNotifications[memberId];

    if (!notifications) {
      return undefined;
    }

    return notifications;
  }
);

export default getNotifications;
