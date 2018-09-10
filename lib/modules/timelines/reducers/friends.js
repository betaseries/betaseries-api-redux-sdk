import arrayToID from '../../../utils/func/arrayToID';
import unique from '../../../utils/func/unique';
import constants from '../constants';

const initialState = [];

/**
 * List of the friends timeline events
 *
 * **Actions listened**:
 *
 *  * `FETCH_FRIENDS_TIMELINE`
 *  * `FETCH_TIMELINE_EVENT`
 *  * `COMMENT_EVENT`
 *
 * @alias module:Timelines.friends
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('timelines', 'friends').timelinesFriends;
 *
 * // state example
 * [ 3215, 2576, 9234, ...] // Event Ids
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showEpisodesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FRIENDS_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      return unique([...state, ...arrayToID(action.payload.events)]);
    }

    default:
      return state;
  }
}
