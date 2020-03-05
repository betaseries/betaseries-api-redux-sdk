import constants from '../constants';

const initialState = {};

/**
 * List of the show interest genres
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_INTEREST_GENRES`
 *
 * @alias module:Shows.interestGenres
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'interestGenres').showsInterestGenres;
 *
 * // state example
 * {
 *   '1275': {                // show ID
 *       ...interestGenres   // interestGenres elements
 *    },
 *    ...
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsInterestGenresReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_SHOW_INTEREST_GENRES:
      return {
        ...state,
        [action.payload.showId]: action.payload.interestGenres
      };

    default:
      return state;
  }
}
