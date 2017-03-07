import constants from '../constants';

const initialState = [];

/**
 * List of the search shows
 *
 * **Actions listened**:
 *
 *  * `SEARCH_SHOWS`
 *
 * @alias module:Searchs.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('searchs', 'shows').searchShows;
 *
 * // state example
 * [
 *   ...shows               // list of search shows
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function searchShowsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SEARCH_SHOWS:
      return action.payload.shows;

    case constants.CLEAR_SEARCH_SHOWS:
      return initialState;

    default:
      return state;
  }
}
