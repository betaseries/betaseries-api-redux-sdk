import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import removeReplies from '../utils/removeReplies';

const initialState = {};

/**
 * List the comments of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_MEMBER_COMMENTS`
 *
 * @alias module:Comments.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'members').commentsMembers;
 *
 * // state value example
 * {
 *   '12': [               // member ID
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
export default function memberCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MEMBER_COMMENTS:
      return {
        ...state,
        [action.payload.memberId]: [
          ...(state[action.payload.memberId] || []),
          ...arrayToID(removeReplies(action.payload.comments))
        ]
      };

    case constants.COMMENT_MEMBER: {
      const comment = action.payload.comment;

      if (!comment || parseInt(comment.in_reply_to, 10) !== 0) {
        return state;
      }

      return {
        ...state,
        [action.payload.memberId]: [
          ...(state[action.payload.memberId] || []),
          action.payload.comment.id
        ]
      };
    }

    default:
      return state;
  }
}
