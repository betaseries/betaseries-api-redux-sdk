import _get from 'lodash/get';
import _reduce from 'lodash/reduce';
import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List episodes to see of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODES_LIST`
 *
 * @alias module:Shows.membersEpisodesToSee
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'membersEpisodesToSee').showsMembersEpisodesToSee;
 *
 * // state value example
 * {
 *   '12': [               // member ID
 *     1234, 213, 2343,    // list of episodes ID
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
    case constants.FETCH_EPISODES_LIST:
      return {
        ...state,
        [action.payload.userId]: [
          ..._get(state, action.payload.userId, []),
          ...arrayToID(
            _reduce(
              action.payload.shows,
              (sum, show) => [...sum, ...show.unseen],
              []
            )
          )
        ].filter((value, index, self) => self.indexOf(value) === index)
      };

    default:
      return state;
  }
}
