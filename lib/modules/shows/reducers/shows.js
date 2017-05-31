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
        ...arrayToHash(action.payload.shows)
      };

    case constants.FETCH_SHOW:
      return {
        ...state,
        ...arrayToHash([action.payload.show])
      };

    case constants.ADD_SHOW:
    case constants.REMOVE_SHOW: {
      const showId = action.payload.showId;

      if (!Object.prototype.hasOwnProperty.call(state, showId)) {
        return state;
      }
      if (!Object.prototype.hasOwnProperty.call(state[showId], 'in_account')) {
        return state;
      }

      return {
        ...state,
        [showId]: {
          ...state[showId],
          in_account: action.payload.inAccount
        }
      };
    }

    case constants.RATE_SHOW: {
      const showId = action.payload.showId;

      if (!Object.prototype.hasOwnProperty.call(state, showId)) {
        return state;
      }

      return {
        ...state,
        [showId]: action.payload.show
      };
    }

    default:
      return state;
  }
}
