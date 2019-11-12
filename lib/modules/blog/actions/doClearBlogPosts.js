import constants from '../constants';

/**
 * Clear all blog posts
 *
 * **Dispatch**: `CLEAR_BLOG_POSTS`
 *
 * @alias module:Comments.doClearBlogPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doClearBlogPosts')();
 *
 * @returns {Promise}
 */
const doClearBlogPosts = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_BLOG_POSTS,
      payload: {}
    });

export default doClearBlogPosts;
