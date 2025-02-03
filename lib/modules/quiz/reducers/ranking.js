import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of ranking quiz
 *
 * **Actions listened**:
 *
 *  * `FETCH_QUIZ_RANKING`
 *  * `FETCH_GLOBAL_RANKING`
 *  * `FETCH_MONTHLY_RANKING`
 *
 * @alias module:Quiz.ranking
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('quiz', 'ranking').quizRanking;
 *
 * // state value example
 * {
 *   '12': {      // quiz ID
 *     id: 12,    // quiz ranking element
 *     ...quiz ranking,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function quizRankingReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_QUIZ_RANKING: {
      return {
        ...state,
        ...arrayToHash([(action.payload || {}).ranking || {}])
      };
    }

    default:
      return state;
  }
}
