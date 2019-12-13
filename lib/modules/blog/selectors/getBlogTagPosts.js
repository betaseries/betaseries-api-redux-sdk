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
 *    tagId: props.tagId,
 * });
 *
 * @param {Object}  [state]      Redux state
 * @param {Object}  [obj]        Accept the following:
 * @param {String}  [obj.tagId]  Tag id
 *
 * @returns {Array}              Posts array or `undefined`
 */

const getBlogTagPosts = createSelector(
  [commons.getTagPosts, commons.getTagId],
  (tagPosts, tagId) =>
    !Object.prototype.hasOwnProperty.call(tagPosts, tagId)
      ? []
      : tagPosts[tagId]
);

export default getBlogTagPosts;
