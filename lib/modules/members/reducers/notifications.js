import moment from 'moment';
import _pullAt from 'lodash/pullAt';
import constants from '../constants';
import BetaSeries from '../../../betaseries';
import notificationsNormalizer from '../normalizer/notifications';

const initialState = {};

/**
 * List of notifications by memberId
 *
 * **Actions listened**:
 *
 *  * `FETCH_NOTIFICATIONS_LIST`
 *
 * @alias module:Members.notifications
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('members', 'notifications').membersNotifications;
 *
 * // state value example
 * {
 *   '12': [              // member ID
 *     {
 *      id: 18965,        // notification element
 *      ...notification,
 *     },
 *     ...,
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function membersNotificationsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_NOTIFICATIONS_LIST: {
      const userId = BetaSeries.user.userId;

      return {
        ...state,
        [userId]: notificationsNormalizer(action.payload.notifications)
      };
    }

    case constants.MARK_ALL_NOTIFICATIONS_AS_READ: {
      const userId = BetaSeries.user.userId;
      const notifications = (state[userId] || []).map(notif => {
        const newNotif = notif;
        if (!notif.seen) {
          newNotif.seen = moment().format('YYYY-MM-DD HH:mm:ss');
        }

        return newNotif;
      });

      return {
        ...state,
        [userId]: notifications
      };
    }

    case constants.MARK_NOTIFICATION_AS_READ: {
      const userId = BetaSeries.user.userId;
      const notifications = (state[userId] || []).map(notif => {
        const newNotif = notif;
        if (notif.id === action.payload.notificationId && !notif.seen) {
          newNotif.seen = moment().format('YYYY-MM-DD HH:mm:ss');
        }

        return newNotif;
      });

      return {
        ...state,
        [userId]: notifications
      };
    }

    case constants.DELETE_NOTIFICATION: {
      const userId = BetaSeries.user.userId;
      const notifications = state[userId] || [];
      const index = notifications.indexOf(action.payload.notificationId);

      if (index !== -1) {
        _pullAt(notifications, index);
      }

      return {
        ...state,
        [userId]: notifications
      };
    }

    default:
      return state;
  }
}
