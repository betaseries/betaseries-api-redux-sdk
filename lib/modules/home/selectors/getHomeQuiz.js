import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select home quiz from state
 *
 * @alias module:Home.getHomeQuiz
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   quiz: BetaSeries.getSelector('home', 'getHomeQuiz')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Quiz elements or `undefined`
 */
const getHomeQuiz = createSelector([commons.getQuizs], quizs => quizs || []);

export default getHomeQuiz;
