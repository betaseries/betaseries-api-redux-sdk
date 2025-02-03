import _padStart from 'lodash/padStart';
import constants from '../constants';

const initialState = {};

/**
 * List of month ranking for quiz
 *
 * **Actions listened**:
 *
 *  * `FETCH_MONTHLY_RANKING`
 *
 * @alias module:Quiz.monthRanking
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('quiz', 'monthRanking').quizMonthRanking;
 *
 * // state value example
 * {
 *   '2025-01': [       // month
 *     {
 *        rank: 1,      // ranking element
 *        ...ranking,
 *     },
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function quizMonthRankingReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MONTHLY_RANKING: {
      const date = new Date();

      const month = (action.payload || {}).month ||
        `${date.getFullYear()}-${_padStart(Math.floor(date.getMonth() + 1), 2, 0)}`;

      const ranking = (action.payload || {}).ranking || [];

      return {
        ...state,
        [month]: [...(state[month] || []), ...ranking]
      };
    }

    default:
      return state;
  }
}
