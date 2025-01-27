import _filter from 'lodash/filter';
import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select quiz list from state
 *
 * @alias module:Quiz.getQuizList
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   quizList: BetaSeries.getSelector('quiz', 'getQuizList')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Quiz element or `undefined`
 */

const getQuizList = createSelector([commons.getQuizs], quizs =>
  _filter(
    quizs,
    (quiz = {}) =>
      quiz.active === true && ((quiz || {}).user || {}).date === null
  ));

export default getQuizList;
