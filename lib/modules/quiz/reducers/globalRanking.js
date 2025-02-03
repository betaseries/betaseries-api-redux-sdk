import _orderBy from 'lodash/orderBy';
import constants from '../constants';

const initialState = [];

/**
 * List of global ranking for quiz
 *
 * **Actions listened**:
 *
 *  * `FETCH_GLOBAL_RANKING`
 *
 * @alias module:Quiz.globalRanking
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('quiz', 'globalRanking').quizGlobalRanking;
 *
 * // state value example
 * [
 *   {      // rank ID
 *     rank: 1,    // ranking element
 *     ...ranking,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function quizGlobalRankingReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_GLOBAL_RANKING: {
      const ranking = (action.payload || {}).ranking || [];

      return _orderBy([...state, ...ranking], 'rank');
    }

    default:
      return state;
  }
}
