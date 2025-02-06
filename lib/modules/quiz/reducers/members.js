import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';
import BetaSeries from '../../../betaseries';

const initialState = {};

/**
 * List of quiz of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_QUIZ_LIST`
 *
 * @alias module:Quiz.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('quiz', 'members').quizMembers;
 *
 * // state example
 * {
 *   '12': [{           // member ID
 *     id: 384144,    // quiz
 *     ...quiz,
 *   }, ...,
 *  ],
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function quizMembersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_QUIZ_LIST: {
      const userId = action.payload.memberId || BetaSeries.user.userId;

      return {
        ...state,
        [userId]: _uniqBy(
          [...(state[userId] || []), ...(action.payload.quizs || [])],
          'id'
        )
      };
    }

    default:
      return state;
  }
}
