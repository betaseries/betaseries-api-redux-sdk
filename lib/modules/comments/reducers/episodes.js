import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import removeReplies from '../utils/removeReplies';

const initialState = {};

/**
 * List the comments of the episode
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_COMMENTS`
 *  * `COMMENT_EPISODE`
 *
 * @alias module:Comments.episodes
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
    case constants.FETCH_EPISODE_COMMENTS:
      return {
        ...state,
        [action.payload.episodeId]: [
          ...(state[action.payload.episodeId] || []),
          ...arrayToID(removeReplies(action.payload.comments))
        ]
      };

    case constants.COMMENT_EPISODE: {
      const comment = action.payload.comment;

      if (!comment || parseInt(comment.in_reply_to, 10) !== 0) {
        return state;
      }

      return {
        ...state,
        [action.payload.episodeId]: [
          ...(state[action.payload.episodeId] || []),
          action.payload.comment.id
        ]
      };
    }

    default:
      return state;
  }
}
