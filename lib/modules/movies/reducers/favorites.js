import _union from 'lodash/union';
import constants from '../constants';
import memberConstants from '../../members/constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List the favorite movies of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_MOVIES`
 *
 * @alias module:Movies.favorites
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'favorites').moviesFavorites;
 *
 * // state value example
 * {
 *   '12': [               // member ID
 *     1234, 213, 2343,    // list of movies ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function movieFavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_MOVIES:
      return {
        ...state,
        [action.payload.memberId]: arrayToID(action.payload.movies)
      };

    case memberConstants.FETCH_USER:
    case memberConstants.FETCH_MEMBER: {
      if (
        !Object.prototype.hasOwnProperty.call(
          action.payload.member,
          'favorite_movies'
        )
      ) {
        return state;
      }

      return {
        ...state,
        [action.payload.memberId]: _union(
          state[action.payload.memberId] || [],
          arrayToID(action.payload.member.favorite_movies)
        )
      };
    }

    default:
      return state;
  }
}
