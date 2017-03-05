import constants from '../constants';

const initialState = {};

/**
 * List of the movie characters
 *
 * **Actions listened**:
 *
 *  * `FETCH_MOVIE_CHARACTERS`
 *
 * @alias module:Movies.characters
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'characters');
 *
 * // state value example
 * {
 *   '1243': [              // movie ID
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
export default function movieCharactersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MOVIE_CHARACTERS:
      return {
        ...state,
        [action.payload.movieId]: action.payload.characters,
      };

    default:
      return state;
  }
}
