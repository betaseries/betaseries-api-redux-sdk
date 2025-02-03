import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select quiz ranking by ID from state
 *
 * @alias module:Quiz.getQuizRanking
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   ranking: BetaSeries.getSelector('quiz', 'getQuizRanking')(state, {
 *     quizId: props.quizId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.quizId]      Quiz ID
 *
 * @returns {Array}                   Ranking element or `undefined`
 */
const getQuizRanking = createSelector(
  [commons.getQuizsRanking, commons.getQuizId],
  (rankings, quizId) =>
    !Object.prototype.hasOwnProperty.call(rankings, quizId)
      ? undefined
      : rankings[quizId]
);

export default getQuizRanking;
