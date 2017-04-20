import arrayToHash from '../../../utils/func/arrayToHash';
import constants from '../constants';
import commentConstants from '../../comments/constants';

const initialState = {};

/**
 * List of the events
 *
 * **Actions listened**:
 *
 *  * `FETCH_FRIENDS_TIMELINE`
 *  * `FETCH_TIMELINE_EVENT`
 *  * `COMMENT_EVENT`
 *
 * @alias module:Timelines.events
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('timelines', 'events').timelinesEvents;
 *
 * // state example
 * {
 *   '3215': {
 *     id: 3215,          // event ID
 *     ...event,        // event element
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function timelineEventsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_TIMELINE_EVENT: {
      return {
        ...state,
        ...arrayToHash([action.payload.event])
      };
    }

    case constants.FETCH_FEED_TIMELINE:
    case constants.FETCH_FRIENDS_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      return {
        ...state,
        ...arrayToHash(action.payload.events)
      };
    }

    case commentConstants.COMMENT_EVENT: {
      const eventId = action.payload.eventId;

      if (!Object.prototype.hasOwnProperty.call(state, eventId)) {
        return state;
      }

      return {
        ...state,
        [eventId]: {
          ...state[eventId],
          comments: state[eventId].comments + 1
        }
      };
    }

    default:
      return state;
  }
}
