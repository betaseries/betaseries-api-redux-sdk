import constants from '../constants';

/**
 * Clear tag blog posts
 *
 * **Dispatch**: `CLEAR_BLOG_TAG_POSTS`
 *
 * @alias module:Blog.doClearTagPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doClearTagPosts')({ tagSlug: 'philarmonie-paris' });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.tagSlug]     Tag slug wanted
 * 
 * @returns {Promise}
 */
const doClearTagPosts = ({ tagSlug }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_BLOG_TAG_POSTS,
      payload: {
        tagSlug
      }
    });

export default doClearTagPosts;
