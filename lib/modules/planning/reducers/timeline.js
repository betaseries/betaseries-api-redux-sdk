import _uniqBy from 'lodash/uniqBy';
import _sortBy from 'lodash/sortBy';
import BetaSeries from '../../../betaseries';
import constants from '../constants';

const initialState = {};

/**
 * List of the timeline events
 *
 * **Actions listened**:
 *
 *  * `FETCH_PLANNING_TIMELINE`
 *
 * @alias module:Planning.timeline
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('planning', 'timeline').planningCalendar;
 *
 * // state example
 * {
 *   '12': [                    // member ID
 *     {
 *       date: '2017-07-08',
 *       events: [
 *         {
 *           type: 'episode_release',
 *           payload: { ... } // according event type
 *         },
 *         ...events
 *       ],
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
export default function planningTimelineReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PLANNING_TIMELINE: {
      const memberId = BetaSeries.user.userId;
      const memberEvents = !Object.prototype.hasOwnProperty.call(
        state,
        memberId
      )
        ? []
        : state[memberId];

      return {
        ...state,
        [memberId]: _sortBy(
          _uniqBy([...memberEvents, ...action.payload.days], 'date'),
          'date'
        )
      };
    }

    default:
      return state;
  }
}
