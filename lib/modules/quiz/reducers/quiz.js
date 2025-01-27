import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of quiz
 *
 * **Actions listened**:
 *
 *  * `FETCH_QUIZ_LIST`
 *  * `FETCH_QUIZ_HISTORY`
 *  * `FETCH_QUIZ`
 *  * `ANSWER_QUIZ`
 *
 * @alias module:Quiz.quiz
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('quiz', 'quiz').quiz;
 *
 * // state value example
 * {
 *   '12': {      // quiz ID
 *     id: 12,    // quiz element
 *     ...quiz,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ANSWER_QUIZ:
    case constants.FETCH_QUIZ: {
      return {
        ...state,
        ...arrayToHash([(action.payload || {}).quiz || {}])
      };
    }

    case constants.FETCH_QUIZ_HISTORY:
    case constants.FETCH_QUIZ_LIST: {
      return {
        ...state,
        ...arrayToHash((action.payload || {}).quizs || [])
      };
    }

    default:
      return state;
  }
}
