import constants from '../constants';
import timelineConstants from '../../timelines/constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List the comments of the episode
 *
 * **Actions listened**:
 *
 *  * `FETCH_EVENT_COMMENTS`
 *  * `COMMENT_EVENT`
 *  * `FETCH_FRIENDS_TIMELINE`
 *  * `FETCH_TIMELINE_EVENT`
 *
 * @alias module:Comments.events
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'events').commentsEvents;
 *
 * // state value example
 * {
 *   '12': [               // event ID
 *     1234, 213, 2343,    // list of comments ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function episodeCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_EVENT_COMMENTS:
      return {
        ...state,
        [action.payload.eventId]: arrayToID(action.payload.comments)
      };

    case constants.COMMENT_EVENT: {
      const commentIds = state[action.payload.eventId] || [];

      return {
        ...state,
        [action.payload.eventId]: [
          ...commentIds,
          ...arrayToID([action.payload.comment])
        ]
      };
    }

    case timelineConstants.FETCH_FRIENDS_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      return {
        ...state,
        ...action.payload.events.reduce(
          (sum, event) => ({
            ...sum,
            [event.id]: arrayToID(event.first_comments)
          }),
          {}
        )
      };
    }

    case timelineConstants.FETCH_TIMELINE_EVENT: {
      if (action.payload.event.first_comments.length === 0) {
        return state;
      }

      return {
        ...state,
        [action.payload.eventId]: arrayToID(action.payload.event.first_comments)
      };
    }

    default:
      return state;
  }
}
