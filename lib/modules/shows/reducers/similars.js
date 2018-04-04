import constants from '../constants';

const initialState = {};

/**
 * List of similar shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_SIMILAR_SHOWS`
 *
 * @alias module:Shows.similars
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'similars').showsSimilars;
 *
 * // state value example
 * {
 *   '1275': [              // show ID
 *     {
 *       id: 123543,        // similar ID
 *       ...similar       // similar element
 *     },
 *     ...
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsSimilarReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SIMILAR_SHOWS:
      return {
        ...state,
        [action.payload.showId]: action.payload.similars
      };

    default:
      return state;
  }
}
