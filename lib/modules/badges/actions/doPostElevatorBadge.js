import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add count for elevator badge
 *
 * **Dispatch**: `POST_ELEVATOR_BADGE`
 *
 * @alias module:Badges.doPostElevatorBadge
 * @category actions
 *
 * @example
 * BetaSeries.getAction('badges', 'doPostElevatorBadge')({
 *   value: 10,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.value]       Count for elevator music played
 *
 * @returns {Promise}
 */
const doPostElevatorBadge = ({ ...props }) =>
  dispatch =>
    ApiFetch.post('badges/elevator', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.POST_ELEVATOR_BADGE,
        payload: {
          ...props,
          response
        }
      }));

export default doPostElevatorBadge;
