import constants from '../constants';

/**
 * Clear category blog posts
 *
 * **Dispatch**: `CLEAR_BLOG_CATEGORY_POSTS`
 *
 * @alias module:Blog.doClearCategoryPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doClearCategoryPosts')({ categoryId: 53 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.categoryId]  Category Id wanted
 * 
 * @returns {Promise}
 */
const doClearCategoryPosts = ({ categoryId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_BLOG_CATEGORY_POSTS,
      payload: {
        categoryId
      }
    });

export default doClearCategoryPosts;
