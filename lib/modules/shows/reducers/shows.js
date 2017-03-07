import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_SHOWS`
 *  * `FETCH_MANY_SHOWS`
 *  * `FETCH_SHOW`
 *
 * @alias module:Shows.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'shows').shows;
 *
 * // state example
 * {
 *   '1275': {      // show ID
 *     id: 1275,    // show element
 *     ...show,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_SHOWS:
    case constants.FETCH_MANY_SHOWS:
      return {
        ...state,
        ...arrayToHash(action.payload.shows),
      };

    case constants.FETCH_SHOW:
      return {
        ...state,
        ...arrayToHash([action.payload.show]),
      };

    default:
      return state;
  }
}
