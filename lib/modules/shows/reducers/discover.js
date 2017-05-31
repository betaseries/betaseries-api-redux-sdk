import constants from '../constants';

const initialState = [];

/**
 * List of discover shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_DISCOVER_SHOWS`
 *
 * @alias module:Shows.discover
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'discover').showsDiscover;
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
    case constants.FETCH_DISCOVER_SHOWS:
      return [...action.payload.shows, ...state];

    default:
      return state;
  }
}
