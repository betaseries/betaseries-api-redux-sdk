import constants from '../constants';

/**
 * Mark single user notification as read
 *
 * **Dispatch**: `MARK_NOTIFICATION_AS_READ`
 *
 * @alias module:Members.doMarkNotificationAsRead
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doMarkNotificationAsRead')();
 *
 * @param {Object}  [obj]                 Accept the following:
 * @param {Number}  [obj.notificationId]  Id of the notification
 *
 * @returns {Promise}
 */
const doMarkNotificationAsRead = ({ notificationId }) =>
  dispatch =>
    dispatch({
      type: constants.MARK_NOTIFICATION_AS_READ,
      payload: {
        notificationId
      }
    });

export default doMarkNotificationAsRead;
