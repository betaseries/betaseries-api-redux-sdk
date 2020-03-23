import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select hotTopics from state
 *
 * @alias module:Blog.getBlogHotTopics
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogHotTopics')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   HotTopics elements or `undefined`
 */
const getBlogHotTopics = createSelector(
  [commons.getHotTopics],
  hotTopics => hotTopics || []
);

export default getBlogHotTopics;
