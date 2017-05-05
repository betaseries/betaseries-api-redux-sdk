import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';
import removeReplies from '../utils/removeReplies';

const initialState = {};

/**
 * List the comments of the movie
 *
 * **Actions listened**:
 *
 *  * `FETCH_MOVIE_COMMENTS`
 *
 * @alias module:Comments.movies
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'movies').commentsMovies;
 *
 * // state value example
 * {
 *   '12': [               // movie ID
 *     1234, 213, 2343,    // list of comments ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function movieCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MOVIE_COMMENTS:
      return {
        ...state,
        [action.payload.movieId]: arrayToID(
          removeReplies(action.payload.comments)
        )
      };

    default:
      return state;
  }
}
