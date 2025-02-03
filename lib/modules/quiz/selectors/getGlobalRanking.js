import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select global ranking list from state
 *
 * @alias module:Quiz.getGlobalRanking
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   ranking: BetaSeries.getSelector('quiz', 'getGlobalRanking')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                  Quiz ranking element or `undefined`
 */

const getGlobalRanking = createSelector(
  [commons.getQuizGlobalRanking],
  ranking => {
    if (!ranking) {
      return undefined;
    }

    return ranking;
  }
);

export default getGlobalRanking;
