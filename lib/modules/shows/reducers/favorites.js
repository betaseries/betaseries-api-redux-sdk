import _union from 'lodash/union';
import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import BetaSeries from '../../../betaseries';

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
 * BetaSeries.getReducer('shows', 'favorites').showsFavorites;
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
        [action.payload.memberId]: arrayToID(action.payload.shows)
      };

    case constants.ADD_SHOW_FAVORITE:
      return {
        ...state,
        [BetaSeries.user.userId]: _union(state[BetaSeries.user.userId] || [], [
          action.payload.showId
        ])
      };

    default:
      return state;
  }
}
