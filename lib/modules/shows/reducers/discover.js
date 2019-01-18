import _pullAt from 'lodash/pullAt';
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
 *   [
 *    {
 *     id: 1275,    // show element
 *     ...show,
 *   },
 *   ...,
 *  ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsDiscoverReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CLEAR_DISCOVER_SHOWS: {
      return initialState;
    }

    case constants.FETCH_DISCOVER_SHOWS:
      return [...state, ...action.payload.shows];

    case constants.ADD_SHOW: {
      if (!Object.prototype.hasOwnProperty.call(state, action.payload.showId)) {
        return state;
      }

      const nextState = [...state];

      const index = nextState.indexOf(action.payload.showId);

      if (index !== -1) {
        _pullAt(nextState, index);
      }

      return nextState;
    }

    default:
      return state;
  }
}
