import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select categories from state
 *
 * @alias module:Blog.getBlogCategories
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogCategories')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Categories elements or `undefined`
 */
const getBlogCategories = createSelector(
  [commons.getCategories],
  categories => categories || []
);

export default getBlogCategories;
