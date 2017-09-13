import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve user notifications
 *
 * **Dispatch**: `FETCH_NOTIFICATIONS_LIST`
 *
 * @alias module:Members.doFetchMemberNotifications
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchMemberNotifications')({ number: 50, … });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.number]      Number of notifications wanted (default to 10)
 * @param {String}  [obj.sort]        Sort order (default desc)
 * @param {Bool}    [obj.all]         Display all notifications, not only unseen (default false)
 * @param {Bool}    [obj.auto_mark]   Automatically mark notifications as read (default false)
 *
 * @returns {Promise}
 */
const doFetchMemberNotifications = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('members/notifications', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_NOTIFICATIONS_LIST,
        payload: {
          ...props,
          notifications: response.notifications || []
        }
      }));

export default doFetchMemberNotifications;
