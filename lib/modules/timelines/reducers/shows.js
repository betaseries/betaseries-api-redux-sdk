import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import unique from '../../../utils/func/unique';

const initialState = {};

/**
 * List events of the show
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_TIMELINE`
 *
 * @alias module:Timelines.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('timelines', 'shows').timelinesShows;
 *
 * // state value example
 * {
 *   '12': [               // show ID
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
export default function timelinesShowsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      const showId = action.payload.showId;
      const showEvents = state[showId] || [];

      return {
        ...state,
        [showId]: unique([
          ...showEvents,
          ...arrayToID(action.payload.events)
        ]).sort((a, b) => b - a)
      };
    }

    default:
      return state;
  }
}
