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
 *
 * @alias module:Comments.events
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'episodes').commentsEpisodes;
 *
 * // state value example
 * {
 *   '12': [               // episode ID
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

    case timelineConstants.FETCH_FRIENDS_TIMELINE:
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

    default:
      return state;
  }
}
