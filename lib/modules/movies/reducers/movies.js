import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of movies
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_MOVIES`
 *  * `FETCH_MEMBER_MOVIES`
 *  * `FETCH_MOVIE`
 *
 * @alias module:Movies.movies
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'movies');
 *
 * // state value example
 * {
 *   '12': {      // movie ID
 *     id: 12,    // movie element
 *     ...movie,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_MOVIES:
    case constants.FETCH_MEMBER_MOVIES:
      return {
        ...state,
        ...arrayToHash(action.payload.movies),
      };

    case constants.FETCH_MOVIE:
      return {
        ...state,
        ...arrayToHash([action.payload.movie]),
      };

    default:
      return state;
  }
}
