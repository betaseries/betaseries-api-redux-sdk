import constants from '../constants';

const initialState = [];

/**
 * List of the search movies
 *
 * **Actions listened**:
 *
 *  * `SEARCH_MOVIES`
 *
 * @alias module:Searchs.movies
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('searchs', 'movies').searchMovies;
 *
 * // state example
 * [
 *   ...movies               // list of search movies
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function searchMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SEARCH_MOVIES:
      return action.payload.movies;

    case constants.CLEAR_SEARCH_MOVIES:
      return initialState;

    default:
      return state;
  }
}
