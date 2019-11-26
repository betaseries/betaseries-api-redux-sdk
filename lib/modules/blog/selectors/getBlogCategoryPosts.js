import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select posts from state for category
 *
 * @alias module:Blog.getBlogCategoryPosts
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   post: BetaSeries.getSelector('blog', 'getBlogCategoryPosts')(state, {
 *    categoryId: props.categoryId,
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.categoryId]  Category id
 *
 * @returns {Array}                   Posts array or `undefined`
 */

const getBlogCategoryPosts = createSelector(
  [commons.getCategoryPosts, commons.getCategoryId],
  (categoryPosts, categoryId) =>
    !Object.prototype.hasOwnProperty.call(categoryPosts, categoryId)
      ? []
      : categoryPosts[categoryId]
);

export default getBlogCategoryPosts;
