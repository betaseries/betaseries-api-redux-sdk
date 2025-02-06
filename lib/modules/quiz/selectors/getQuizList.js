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
 *   quizs:
 *  BetaSeries.getSelector('quizs', 'getQuizList')(state, { memberId: 1 });
 * });
 *
 * @param {Object}  [state]      Redux state
 *
 * @returns {Array}              Array of quiz or `[]`
 */
const getQuizList = createSelector(
  [commons.getMembersQuizs, commons.getQuizs, commons.getMemberId],
  (membersQuizs, quizs, memberId) => {
    if (!Object.prototype.hasOwnProperty.call(membersQuizs, memberId)) {
      return [];
    }

    let elements = membersQuizs[memberId];

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
        quiz.active === true && ((quiz || {}).user || {}).date === null
    );
  }
);

export default getQuizList;
