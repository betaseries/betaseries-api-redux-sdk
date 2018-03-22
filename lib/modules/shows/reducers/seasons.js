import constants from '../constants';

const initialState = {};

/**
 * List of seasons
 *
 * **Actions listened**:
 *
 *  * `FETCH_SEASONS`
 *
 * @alias module:Shows.seaons
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'seasons').showsSeasons;
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
    case constants.FETCH_SEASONS:
      return {
        ...state,
        [action.payload.showId]: {
          id: action.payload.showId,
          seasons: action.payload.seasons
        }
      };

    default:
      return state;
  }
}
