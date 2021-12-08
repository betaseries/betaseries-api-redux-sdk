import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select popular articles from state
 *
 * @alias module:Home.getHomePopularArticles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('home', 'getHomePopularArticles')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Article posts elements or `undefined`
 */
const getHomePopularArticles = createSelector(
  [commons.getArticles],
  articles => articles || []
);

export default getHomePopularArticles;
