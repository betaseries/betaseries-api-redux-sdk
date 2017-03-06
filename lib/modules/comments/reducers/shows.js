import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

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
 * BetaSeries.getReducer('comments', 'shows');
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
        [action.payload.showId]: arrayToID(action.payload.comments),
      };

    default:
      return state;
  }
}
