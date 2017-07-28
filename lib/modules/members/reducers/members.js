import constants from '../constants';
import BetaSeries from '../../../betaseries';

const initialState = {};

/**
 * List of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_MEMBER`
 *
 * @alias module:Members.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('members', 'members').members;
 *
 * // state value example
 * {
 *   '12': {      // member ID
 *     id: 12,    // member element
 *     ...member,
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
    case constants.FETCH_USER:
    case constants.FETCH_MEMBER: {
      const member = { ...action.payload.member };

      delete member.shows;
      delete member.movies;
      delete member.favorites;
      delete member.favorite_movies;

      return {
        ...state,
        [action.payload.memberId]: member
      };
    }

    case constants.FETCH_MEMBER_EMAIL:
    case constants.UPDATE_MEMBER_EMAIL: {
      const userId = BetaSeries.user.userId;

      if (!Object.prototype.hasOwnProperty.call(state, userId)) {
        return state;
      }

      return {
        ...state,
        [userId]: {
          ...state[userId],
          email: action.payload.email
        }
      };
    }

    default:
      return state;
  }
}
