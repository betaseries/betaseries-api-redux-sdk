import _uniqBy from 'lodash/uniqBy';
import BetaSeries from '../../../betaseries';
import constants from '../constants';

const initialState = {};

/**
 * List of the calendar events
 *
 * **Actions listened**:
 *
 *  * `FETCH_PLANNING_CALENDAR`
 *
 * @alias module:Planning.calendar
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('planning', 'calendar').planningCalendar;
 *
 * // state example
 * {
 *   '12': [                    // member ID
 *     {
 *       date: '2017-07-08',
 *       density: 'light',
 *       amount: 1
 *     },
 *     ...days
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function planningCalendarReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PLANNING_CALENDAR: {
      const memberId = BetaSeries.user.userId;
      const memberEvents = !Object.prototype.hasOwnProperty.call(
        state,
        memberId
      )
        ? []
        : state[memberId];

      return {
        ...state,
        [memberId]: _uniqBy([...memberEvents, ...action.payload.days], 'date')
      };
    }

    default:
      return state;
  }
}
