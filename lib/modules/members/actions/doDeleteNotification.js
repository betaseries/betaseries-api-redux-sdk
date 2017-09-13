import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Delete notification of member
 *
 * **Dispatch**: `DELETE_NOTIFICATION`
 *
 * @alias module:Members.doDeleteNotification
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doDeleteNotification')({
 *   notificationId: 438,
 * });
 *
 * @param {Object}  [obj]                 Accept the following:
 * @param {Number}  [obj.notificationID]  Notification ID
 *
 * @returns {Promise}
 */
const doDeleteNotification = ({ notificationId }) =>
  dispatch => {
    dispatch({
      type: constants.DELETE_NOTIFICATION,
      payload: {
        notificationId
      }
    });

    return ApiFetch.remove('members/notification', {
      id: notificationId
    });
  };

export default doDeleteNotification;
