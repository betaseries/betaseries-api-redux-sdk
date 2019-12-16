import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select posts from state for tag
 *
 * @alias module:Blog.getBlogTagPosts
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   post: BetaSeries.getSelector('blog', 'getBlogTagPosts')(state, {
 *    tagSlug: props.tagSlug,
 * });
 *
 * @param {Object}  [state]        Redux state
 * @param {Object}  [obj]          Accept the following:
 * @param {String}  [obj.tagSlug]  Tag slug
 *
 * @returns {Array}                Posts array or `undefined`
 */

const getBlogTagPosts = createSelector(
  [commons.getTagPosts, commons.getTagSlug],
  (tagPosts, tagSlug) =>
    !Object.prototype.hasOwnProperty.call(tagPosts, tagSlug)
      ? []
      : tagPosts[tagSlug]
);

export default getBlogTagPosts;
