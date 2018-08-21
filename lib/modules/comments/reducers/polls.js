import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List the comments of the poll
 *
 * **Actions listened**:
 *
 *  * `FETCH_POLL_COMMENTS`
 *  * `CLEAR_POLL_COMMENTS`
 *  * `COMMENT_POLL`
 *
 * @alias module:Comments.polls
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'polls').commentsPolls;
 *
 * // state value example
 * {
 *   '12': [               // poll ID
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
export default function pollCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CLEAR_POLL_COMMENTS: {
      if (!Object.prototype.hasOwnProperty.call(action.payload, 'pollId')) {
        return state;
      }

      const newState = { ...state };
      delete newState[action.payload.pollId];

      return newState;
    }

    case constants.FETCH_POLL_COMMENTS: {
      const prevCommentIds = state[action.payload.pollId] || [];

      return {
        ...state,
        [action.payload.pollId]: [
          ...prevCommentIds,
          ...arrayToID(action.payload.comments)
        ]
      };
    }

    case constants.COMMENT_POLL: {
      const prevCommentIds = state[action.payload.pollId] || [];

      return {
        ...state,
        [action.payload.pollId]: [
          ...prevCommentIds,
          ...arrayToID([action.payload.comment])
        ]
      };
    }

    default:
      return state;
  }
}
