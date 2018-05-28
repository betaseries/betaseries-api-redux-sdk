import constants from '../constants';

/**
 * Clear notifications
 *
 * **Dispatch**: `CLEAR_NOTIFICATIONS_LIST`
 *
  * @alias module:Members.doClearMemberNotifications
 * @category actions
 *
 * @example
  * BetaSeries.getAction('members', 'doClearMemberNotifications')();
 *
 * @returns {Promise}
 */
const doClearMemberNotifications = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_NOTIFICATIONS_LIST
    });

export default doClearMemberNotifications;
