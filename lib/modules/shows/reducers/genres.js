import constants from '../constants';

const initialState = [];

/**
 * List of the show genres
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_GENRES`
 *
 * @alias module:Shows.genres
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'genres').showsGenres;
 *
 * // state example
 * [
 *     {
 *       id: 123543,        // genre ID
 *       ...genre       // genre element
 *     },
 *     ...
  * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsGenresReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_GENRES:
      return action.payload.genres;

    default:
      return state;
  }
}
