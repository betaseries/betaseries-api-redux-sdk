import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select monthly ranking from state
 *
 * @alias module:Quiz.getMonthlyRanking
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   ranking: BetaSeries.getSelector('planning', 'getMonthlyRanking')(state, {
 *     month: '2025-2',
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.month]       Month (format `Y-M`)
 *
 * @returns {Array}                   List of monthly ranking or `undefined`
 */
const getMonthlyRanking = createSelector(
  [commons.getQuizMonthRanking, commons.getMonth],
  (ranking, month) => {
    if (!ranking) {
      return undefined;
    }

    return !Object.prototype.hasOwnProperty.call(ranking, month)
      ? undefined
      : ranking[month];
  }
);

export default getMonthlyRanking;
