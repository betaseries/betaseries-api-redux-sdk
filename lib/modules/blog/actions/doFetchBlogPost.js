import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress specific post
 *
 * **Dispatch**: `FETCH_WP_POST`
 *
 * @alias module:Blog.doFetchBlogPost
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogPost')({ postId: 1 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.postId]  Post ID
 *
 * @returns {Promise}
 */
const doFetchBlogPost = ({ postId }) =>
  dispatch =>
    fetch(`${ApiFetch.getBlogURL()}/posts/${postId}`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_POST,
          payload: {
            postId,
            posts: [json] || []
          }
        })));

export default doFetchBlogPost;
