import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select quiz by ID from state
 *
 * @alias module:Quiz.getQuiz
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   quiz: BetaSeries.getSelector('quiz', 'getQuiz')(state, {
 *     quizId: props.quizId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.quizId]      Quiz ID
 *
 * @returns {Array}                   Quiz element or `undefined`
 */
const getQuiz = createSelector(
  [commons.getQuizs, commons.getQuizId],
  (quizs, quizId) =>
    !Object.prototype.hasOwnProperty.call(quizs, quizId)
      ? undefined
      : quizs[quizId]
);

export default getQuiz;
