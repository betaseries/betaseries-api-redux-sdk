import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of comments
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_COMMENTS`
 *  * `FETCH_SHOW_COMMENTS`
 *  * `FETCH_COMMENT`
 *
 * @alias module:Comments.comments
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'comments').comments;
 *
 * // state example
 * {
 *   '384144': {      // comment ID
 *     id: 384144,    // comment element
 *     ...comments,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_EPISODE_COMMENTS:
    case constants.FETCH_SHOW_COMMENTS:
      return {
        ...state,
        ...arrayToHash(action.payload.comments),
      };

    case constants.FETCH_COMMENT:
      return {
        ...state,
        ...arrayToHash([action.payload.comment]),
      };

    default:
      return state;
  }
}
