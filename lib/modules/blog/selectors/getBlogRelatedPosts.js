import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select related posts from state
 *
 * @alias module:Blog.getBlogRelatedPosts
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogRelatedPosts')(state, {
 *    parentId: props.parentId,
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.parentId]    Parent Post ID
 *
 * @returns {Array}                   Related posts elements or `undefined`
 */

const getBlogRelatedPosts = createSelector(
  [commons.getRelatedPosts, commons.getParentId],
  (relatedPosts, parentId) =>
    !Object.prototype.hasOwnProperty.call(relatedPosts, parentId)
      ? []
      : relatedPosts[parentId]
);

export default getBlogRelatedPosts;
