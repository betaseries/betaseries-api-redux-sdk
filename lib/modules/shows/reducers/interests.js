import constants from '../constants';

const initialState = {};

/**
 * List of the show interests
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_INTERESTS`
 *
 * @alias module:Shows.interests
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'interests').showsInterests;
 *
 * // state example
 * {
 *   '1275': [              // show ID
 *     {
 *       id: 123543,        // interestShow ID
 *       ...interestShow       // interestShow element
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
export default function showsInterestsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_INTERESTS:
      return {
        ...state,
        [action.payload.showId]: action.payload.shows
      };

    default:
      return state;
  }
}
