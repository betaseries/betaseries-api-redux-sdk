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
 *   quizs:
 *  BetaSeries.getSelector('quizs', 'getQuizHistory')(state, { memberId: 1 });
 * });
 *
 * @param {Object}  [state]      Redux state
 *
 * @returns {Array}              Array of quiz or `[]`
 */
const getQuizHistory = createSelector(
  [commons.getHistoryQuizs, commons.getQuizs, commons.getMemberId],
  (historyQuizs, quizs, memberId) => {
    if (!Object.prototype.hasOwnProperty.call(historyQuizs, memberId)) {
      return [];
    }

    let elements = historyQuizs[memberId];

    if (!elements) {
      return [];
    }

    elements = elements.reduce(
      (sum, element) => {
        if (
          !element || !Object.prototype.hasOwnProperty.call(quizs, element.id)
        ) {
          return sum;
        }

        return [
          ...sum,
          { ...element, user: quizs[element.id].user || element.user }
        ];
      },
      []
    );

    return _filter(
      elements || [],
      (quiz = {}) =>
        quiz.active === true && ((quiz || {}).user || {}).date !== null
    );
  }
);

export default getQuizHistory;
