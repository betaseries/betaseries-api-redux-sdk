import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress posts
 *
 * **Dispatch**: `FETCH_WP_POSTS`
 *
 * @alias module:Blog.doFetchBlogPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogPosts')({ page: 1 });
 *
 * @param {Object}  [obj]        Accept the following:
 * @param {Number}  [obj.page]   Page number
 * @param {String}  [obj.lang]   Language info
 *
 * @returns {Promise}
 */
const doFetchBlogPosts = ({ page, lang }) =>
  dispatch =>
    fetch(
      `${ApiFetch.getBlogURL()}/posts?sticky=false&page=${page}&lang=${lang}&categories_exclude=2848`
    ).then(response => response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_POSTS,
          payload: {
            page,
            lang,
            posts: json || []
          }
        })));

export default doFetchBlogPosts;
