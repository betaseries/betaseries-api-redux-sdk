import _reduce from 'lodash/reduce';
import _pullAll from 'lodash/pullAll';
import BetaSeries from '../../../betaseries';
import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List episodes to see of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODES_LIST`
 *  * `MARK_EPISODE_AS_HIDDEN`
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
export default function membersEpisodesToSeeReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_EPISODES_LIST:
      return {
        ...state,
        [action.payload.userId]: [
          ...arrayToID(
            _reduce(
              action.payload.shows,
              (sum, show) => [...sum, ...show.unseen],
              []
            )
          )
        ].filter((value, index, self) => self.indexOf(value) === index)
      };

    case constants.MARK_MANY_EPISODE_AS_WATCHED:
    case constants.MARK_EPISODE_AS_HIDDEN: {
      const userId = BetaSeries.user.userId;

      if (!Object.prototype.hasOwnProperty.call(state, userId)) {
        return state;
      }

      const memberEpisodesToSee = _pullAll(
        state[userId],
        action.payload.episodeIds
      );

      return {
        ...state,
        [userId]: memberEpisodesToSee
      };
    }

    default:
      return state;
  }
}
