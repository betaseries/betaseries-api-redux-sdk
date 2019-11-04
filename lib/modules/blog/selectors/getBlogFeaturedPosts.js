import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select featured posts from state
 *
 * @alias module:Blog.getBlogFeaturedPosts
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogFeaturedPosts')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Featured posts elements or `undefined`
 */
const getBlogFeaturedPosts = createSelector(
  [commons.getFeaturedPosts],
  featuredPosts => featuredPosts || []
);

export default getBlogFeaturedPosts;
