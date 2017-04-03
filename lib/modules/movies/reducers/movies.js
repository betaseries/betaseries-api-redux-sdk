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
 *  * `RATE_MOVIE`
 *  * `UPDATE_MOVIE_STATE`
 *
 * @alias module:Movies.movies
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'movies').movies;
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
    case constants.FETCH_MANY_MOVIES:
      return {
        ...state,
        ...arrayToHash(action.payload.movies)
      };

    case constants.FETCH_MOVIE:
      return {
        ...state,
        ...arrayToHash([action.payload.movie])
      };

    case constants.UPDATE_MOVIE_STATE: {
      const movieId = action.payload.movieId;

      if (!Object.prototype.hasOwnProperty.call(state, movieId)) {
        return state;
      }
      if (!Object.prototype.hasOwnProperty.call(state[movieId], 'auth_user')) {
        return state;
      }

      return {
        ...state,
        [movieId]: {
          ...state[movieId],
          auth_user: {
            ...state[movieId].auth_user,
            in_account: true,
            status: action.payload.state
          }
        }
      };
    }

    case constants.REMOVE_MEMBER_MOVIE: {
      const movieId = action.payload.movieId;

      if (!Object.prototype.hasOwnProperty.call(state, movieId)) {
        return state;
      }
      if (!Object.prototype.hasOwnProperty.call(state[movieId], 'auth_user')) {
        return state;
      }

      return {
        ...state,
        [movieId]: {
          ...state[movieId],
          auth_user: {
            ...state[movieId].auth_user,
            in_account: false
          }
        }
      };
    }

    case constants.RATE_MOVIE: {
      const movieId = action.payload.movieId;

      if (!Object.prototype.hasOwnProperty.call(state, movieId)) {
        return state;
      }

      return {
        ...state,
        [movieId]: {
          ...state[movieId],
          notes: action.payload.movie.notes
        }
      };
    }

    default:
      return state;
  }
}
