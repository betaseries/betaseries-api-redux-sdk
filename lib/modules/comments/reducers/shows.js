import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import removeReplies from '../utils/removeReplies';

const initialState = {};

/**
 * List the comments of the show
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_COMMENTS`
 *
 * @alias module:Comments.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'shows').commentsShows;
 *
 * // state value example
 * {
 *   '12': [               // show ID
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
export default function showCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_COMMENTS:
      return {
        ...state,
        [action.payload.showId]: [
          ...(state[action.payload.showId] || []),
          ...arrayToID(removeReplies(action.payload.comments))
        ]
      };

    case constants.CLEAR_SHOW_COMMENTS: {
      if (!Object.prototype.hasOwnProperty.call(action.payload, 'showId')) {
        return state;
      }

      const newState = { ...state };
      delete newState[action.payload.showId];

      return newState;
    }

    case constants.COMMENT_SHOW: {
      const comment = action.payload.comment;

      if (!comment || parseInt(comment.in_reply_to, 10) !== 0) {
        return state;
      }

      return {
        ...state,
        [action.payload.showId]: [
          ...(state[action.payload.showId] || []),
          action.payload.comment.id
        ]
      };
    }

    default:
      return state;
  }
}
