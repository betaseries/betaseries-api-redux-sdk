import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select articles from state
 *
 * @alias module:Shows.getShowArticles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShowArticles')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of articles element or `undefined`
 */
const getShowArticles = createSelector(
  [commons.getArticles, commons.getShowId],
  (articles, showId) =>
    !Object.prototype.hasOwnProperty.call(articles, showId)
      ? undefined
      : articles[showId]
);

export default getShowArticles;
