import constants from '../constants';

const initialState = {};

/**
 * List of the show characters
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_CHARACTERS`
 *
 * @alias module:Shows.characters
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'characters').showsCharacters;
 *
 * // state example
 * {
 *   '1275': [              // show ID
 *     {
 *       id: 123543,        // character ID
 *       ...character       // character element
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
export default function showsCharactersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_CHARACTERS:
      return {
        ...state,
        [action.payload.showId]: action.payload.characters
      };

    default:
      return state;
  }
}
