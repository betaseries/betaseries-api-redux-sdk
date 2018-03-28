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
        [action.payload.movieId]: [
          ...(state[action.payload.movieId] || []),
          ...arrayToID(removeReplies(action.payload.comments))
        ]
      };

    case constants.CLEAR_MOVIE_COMMENTS: {
      if (!Object.prototype.hasOwnProperty.call(action.payload, 'movieId')) {
        return state;
      }

      const newState = { ...state };
      delete newState[action.payload.movieId];

      return newState;
    }

    case constants.COMMENT_MOVIE: {
      const comment = action.payload.comment;

      if (!comment || parseInt(comment.in_reply_to, 10) !== 0) {
        return state;
      }

      return {
        ...state,
        [action.payload.movieId]: [
          ...(state[action.payload.movieId] || []),
          action.payload.comment.id
        ]
      };
    }

    default:
      return state;
  }
}
