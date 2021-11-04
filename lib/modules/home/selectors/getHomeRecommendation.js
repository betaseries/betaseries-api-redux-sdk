import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select recommendation shows from state
 *
 * @alias module:Home.getHomeRecommendation
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomeRecommendation')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Recommendation shows or `undefined`
 */
const getHomeRecommendation = createSelector(
  [commons.getReco],
  shows => shows || []
);

export default getHomeRecommendation;
