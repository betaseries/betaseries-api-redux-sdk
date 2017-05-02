import constants from '../constants';

const initialState = {
  shows: null,
  movies: null,
  users: null
};

/**
 * List of all search
 *
 * **Actions listened**:
 *
 *  * `SEARCH_ALL`
 *  * `CLEAN_SEARCH_ALL`
 *
 * @alias module:Searchs.all
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('searchs', 'all').searchAll;
 *
 * // state example
 * {
 *   shows: ...shows,      // list of shows search
 *   movies: ...movies,    // list of movies search
 *   users: ...users,      // list of users search
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function searchAllReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SEARCH_ALL: {
      const { shows, users, movies } = action.payload;

      return {
        shows,
        users,
        movies
      };
    }

    case constants.CLEAR_SEARCH_ALL:
      return initialState;

    default:
      return state;
  }
}
