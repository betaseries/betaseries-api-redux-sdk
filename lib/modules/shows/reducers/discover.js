import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

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
      return {
        ...state,
        ...arrayToHash(action.payload.shows)
      };

    case constants.ADD_SHOW: {
      if (!Object.prototype.hasOwnProperty.call(state, action.payload.showId)) {
        return state;
      }

      const nextState = { ...state };
      delete nextState[action.payload.showId];

      return nextState;
    }

    default:
      return state;
  }
}
