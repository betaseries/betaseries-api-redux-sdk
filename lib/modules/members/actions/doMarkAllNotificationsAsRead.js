import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark all user notifications as read
 *
 * **Dispatch**: `MARK_ALL_NOTIFICATIONS_AS_READ`
 *
 * @alias module:Members.doMarkAllNotificationsAsRead
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doMarkAllNotificationsAsRead')();
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Bool}    [obj.auto_mark]   Automatically mark notifications as read (default false)
 *
 * @returns {Promise}
 */
const doMarkAllNotificationsAsRead = ({ ...props }) =>
  dispatch => {
    dispatch({
      type: constants.MARK_ALL_NOTIFICATIONS_AS_READ,
      payload: {
        ...props
      }
    });

    return ApiFetch.get('members/notifications', {
      ...props,
      auto_mark: true
    });
  };

export default doMarkAllNotificationsAsRead;
