import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List the favorite shows of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_SHOWS`
 *
 * @alias module:Shows.favorites
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'favorites');
 *
 * // state example
 * {
 *   '12': [            // member ID
 *     1275, 481, ...   // list of shows ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsFavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_SHOWS:
      return {
        ...state,
        [action.payload.memberId]: arrayToID(action.payload.shows),
      };

    default:
      return state;
  }
}
