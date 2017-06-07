import _unionBy from 'lodash/unionBy';
import _remove from 'lodash/remove';
import membersNormalizer from '../normalizer/members';
import constants from '../constants';
import BetaSeries from '../../../betaseries';
import memberConstants from '../../members/constants';

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
 *   '12': [                // member ID
 *     {                    // show ID
 *       'archived': false,
 *       ...show.user
 *     },
 *     ...shows,            // list of shows ID
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
    case memberConstants.FETCH_USER:
    case memberConstants.FETCH_MEMBER: {
      if (
        !Object.prototype.hasOwnProperty.call(action.payload.member, 'shows')
      ) {
        return state;
      }

      return {
        ...state,
        [action.payload.memberId]: membersNormalizer(
          action.payload.member.shows
        )
      };
    }

    case constants.FETCH_FAVORITE_SHOWS: {
      return {
        ...state,
        [action.payload.memberId]: membersNormalizer(action.payload.shows)
      };
    }

    case constants.RATE_SHOW:
    case constants.ADD_SHOW_FAVORITE:
    case constants.ADD_SHOW_ARCHIVE:
    case constants.REMOVE_SHOW_FAVORITE:
    case constants.REMOVE_SHOW_ARCHIVE:
    case constants.ADD_SHOW: {
      const userId = BetaSeries.user.userId;
      const shows = state[userId] || [];

      return {
        ...state,
        [userId]: _unionBy(
          shows,
          membersNormalizer([action.payload.show]),
          'id'
        )
      };
    }

    case constants.FETCH_MANY_SHOWS: {
      const userId = BetaSeries.user.userId;
      const shows = state[userId] || [];
      const inAccountShows = action.payload.shows.filter(
        show => show.in_account === true
      );

      if (inAccountShows.length === 0) {
        return state;
      }

      return {
        ...state,
        [userId]: {
          ...shows,
          ...membersNormalizer(inAccountShows)
        }
      };
    }

    case constants.REMOVE_SHOW: {
      const userId = BetaSeries.user.userId;
      const showId = action.payload.showId;

      if (!Object.prototype.hasOwnProperty.call(state, userId)) {
        return state;
      }

      const nextState = { ...state };

      _remove(nextState[userId], show => show.id === showId);

      return {
        ...state,
        [showId]: nextState[showId]
      };
    }

    case constants.FETCH_MEMBER_SHOWS: {
      const userId = action.payload.memberId;
      const shows = state[userId] || [];

      if (action.payload.shows.length === 0) {
        return state;
      }

      return {
        ...state,
        [userId]: _unionBy(shows, membersNormalizer(action.payload.shows), 'id')
      };
    }

    default:
      return state;
  }
}
