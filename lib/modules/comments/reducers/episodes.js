import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List the comments of the episode
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_COMMENTS`
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
        [action.payload.episodeId]: arrayToID(action.payload.comments),
      };

    default:
      return state;
  }
}
