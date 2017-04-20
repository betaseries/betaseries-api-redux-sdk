import arrayToID from '../../../utils/func/arrayToID';
import unique from '../../../utils/func/unique';
import constants from '../constants';

const initialState = [];

/**
 * List of the feed timeline events
 *
 * **Actions listened**:
 *
 *  * `FETCH_FEED_TIMELINE`
 *  * `FETCH_TIMELINE_EVENT`
 *
 * @alias module:Timelines.feed
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('timelines', 'feed').timelinesFeed;
 *
 * // state example
 * [ 3215, 2576, 9234, ...] // Event Ids
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function timelineFeedReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FEED_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      const events = action.payload.events;
      const page = action.payload.page || 1;

      return unique([
        ...(page > 1 ? [] : arrayToID(events)),
        ...state,
        ...(page === 1 ? [] : arrayToID(events))
      ]);
    }

    default:
      return state;
  }
}
