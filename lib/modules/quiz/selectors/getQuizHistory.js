import _filter from 'lodash/filter';
import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select quiz history from state
 *
 * @alias module:Quiz.getQuizHistory
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   quizHistory: BetaSeries.getSelector('quiz', 'getQuizHistory')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Quiz element or `undefined`
 */

const getQuizHistory = createSelector([commons.getQuizs], quizs =>
  _filter(quizs, quiz => ((quiz || {}).user || {}).date !== null));

export default getQuizHistory;
