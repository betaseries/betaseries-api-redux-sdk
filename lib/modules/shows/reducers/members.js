import _union from 'lodash/union';
import _pullAll from 'lodash/pullAll';
import BetaSeries from '../../../betaseries';
import constants from '../constants';
import memberConstants from '../../members/constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List shows of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_MEMBER`
 *
 * @alias module:Shows.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'members').showsMembers;
 *
 * // state value example
 * {
 *   '12': [               // member ID
 *     1234, 213, 2343,    // list of shows ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showMembersReducer(state = initialState, action) {
  switch (action.type) {
    case memberConstants.FETCH_MEMBER: {
      if (
        !Object.prototype.hasOwnProperty.call(action.payload.member, 'shows')
      ) {
        return state;
      }

      return {
        ...state,
        [action.payload.memberId]: _union(
          state[action.payload.memberId] || [],
          arrayToID(action.payload.member.shows)
        )
      };
    }

    case constants.REMOVE_SHOW:
    case constants.ADD_SHOW: {
      const userId = BetaSeries.user.userId;
      const shows = state[userId] || [];

      if (action.payload.inAccount === false) {
        return {
          ...state,
          [userId]: _pullAll(shows, [action.payload.showId])
        };
      }

      return {
        ...state,
        [userId]: _union(shows, [action.payload.showId])
      };
    }

    default:
      return state;
  }
}
