import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of quiz for home page
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_QUIZ`
 *
 * @alias module:Home.quiz
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'quiz').homeQuiz;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // quiz id
 *     ...quiz,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function quizHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_QUIZ:
      return _uniqBy([...(action.payload.quizs || []), ...(state || [])], 'id');

    default:
      return state;
  }
}
