import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress featured posts
 *
 * **Dispatch**: `FETCH_WP_FEATURED_POSTS`
 *
 * @alias module:Blog.doFetchBlogFeaturedPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogFeaturedPosts')();
 *
 * @param {Object}  [obj]        Accept the following:
 *
 * @returns {Promise}
 */
const doFetchBlogFeaturedPosts = () =>
  dispatch =>
    fetch(`${ApiFetch.getBlogURL()}/posts?sticky=true`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_FEATURED_POSTS,
          payload: {
            featuredPosts: json || []
          }
        })));

export default doFetchBlogFeaturedPosts;
