import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';
import BetaSeries from '../../../betaseries';

const initialState = {};

/**
 * List of history quiz of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_QUIZ_HISTORY`
 *
 * @alias module:Quiz.history
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('quiz', 'history').quizHistory;
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
export default function quizHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_QUIZ_HISTORY: {
      const userId = (action.payload || {}).memberId || BetaSeries.user.userId;

      if ((action.payload || {}).page === 1) {
        return {
          ...state,
          [userId]: _uniqBy((action.payload || {}).quizs || [], 'id')
        };
      }

      return {
        ...state,
        [userId]: _uniqBy(
          [...(state[userId] || []), ...((action.payload || {}).quizs || [])],
          'id'
        )
      };
    }

    default:
      return state;
  }
}
