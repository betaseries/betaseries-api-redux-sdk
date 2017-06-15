import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import unique from '../../../utils/func/unique';

const initialState = {};

/**
 * List events of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_MEMBER_TIMELINE`
 *
 * @alias module:Timelines.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('timelines', 'members').timelinesMembers;
 *
 * // state value example
 * {
 *   '12': [               // member ID
 *     1234, 213, 2343,    // list of events ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function movieMembersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MEMBER_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      const memberId = action.payload.memberId;
      const memberEvents = state[memberId] || [];

      return {
        ...state,
        [memberId]: unique([
          ...memberEvents,
          ...arrayToID(action.payload.events)
        ]).sort((a, b) => b - a)
      };
    }

    default:
      return state;
  }
}
