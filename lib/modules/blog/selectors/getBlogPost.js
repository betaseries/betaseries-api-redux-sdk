import _find from 'lodash/find';
import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select specific post from state
 *
 * @alias module:Blog.getBlogPost
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   post: BetaSeries.getSelector('blog', 'getBlogPost')(state, {
 *    postId: props.postId,
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.postId]      Post ID
 *
 * @returns {Array}                   Post element or `undefined`
 */

const getBlogPost = createSelector(
  [commons.getPosts, commons.getPostId],
  (posts, postId) => _find(posts || [], { id: postId }) || {}
);

export default getBlogPost;
