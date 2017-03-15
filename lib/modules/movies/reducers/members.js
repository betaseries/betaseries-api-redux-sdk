import _get from 'lodash/get';
import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List movies of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_MEMBER_MOVIES`
 *
 * @alias module:Movies.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'members').moviesMembers;
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
export default function movieMembersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MEMBER_MOVIES:
      return {
        ...state,
        [action.payload.memberId]: [
          ..._get(state, action.payload.memberId, []),
          ...arrayToID(action.payload.movies)
        ]
      };

    case constants.REMOVE_MEMBER_MOVIE: {
      const moviesMembers = _get(state, action.payload.memberId, null);

      if (!moviesMembers) {
        return state;
      }

      return {
        ...state,
        [action.payload.memberId]: moviesMembers.filter(
          movie => movie !== action.payload.movieId
        )
      };
    }

    default:
      return state;
  }
}
