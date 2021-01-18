import constants from '../constants';

const initialState = [];

/**
 * List of the movie genres
 *
 * **Actions listened**:
 *
 *  * `FETCH_MOVIE_GENRES`
 *
 * @alias module:Movies.genres
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'genres').moviesGenres;
 *
 * // state example
 * [
 *     {
 *       id: 123543,    // genre ID
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
export default function moviesGenresReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MOVIE_GENRES:
      return [...state, ...action.payload.genres];

    default:
      return state;
  }
}
