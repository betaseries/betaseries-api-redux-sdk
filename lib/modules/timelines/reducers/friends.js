import _findIndex from 'lodash/findIndex';
import _orderBy from 'lodash/orderBy';
import constants from '../constants';
import commentConstants from '../../comments/constants';

const initialState = [];

/**
 * List of the friends timeline events
 *
 * **Actions listened**:
 *
 *  * `FETCH_FRIENDS_TIMELINE`
 *
 * @alias module:Timelines.friends
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('timelines', 'friends').timelinesFriends;
 *
 * // state example
 * [
 *   {
 *     id: 3215,          // event ID
 *     ...event,        // event element
 *   },
 *   ...,
 * ]
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

      const events = _orderBy(action.payload.events, 'id', 'desc');

      if (state.length === 0) {
        return events;
      }

      const lastEventId = state[0].id;
      const firstEventId = state[state.length - 1].id;

      return [
        ...events.filter(event => event.id > lastEventId),
        ...state,
        ...events.filter(event => event.id < firstEventId)
      ];
    }

    case commentConstants.COMMENT_EVENT: {
      const eventIndex = _findIndex(state, { id: action.payload.eventId });

      if (eventIndex === -1) {
        return state;
      }

      return [
        ...state.slice(0, eventIndex),
        {
          ...state[eventIndex],
          comments: state[eventIndex].comments + 1
        },
        ...state.slice(eventIndex + 1)
      ];
    }

    default:
      return state;
  }
}
