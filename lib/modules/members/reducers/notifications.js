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

    default:
      return state;
  }
}
