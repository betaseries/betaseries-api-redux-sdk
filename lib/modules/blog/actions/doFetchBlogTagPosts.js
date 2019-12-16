import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress posts by tag
 *
 * **Dispatch**: `FETCH_WP_POSTS_WITH_TAG`
 *
 * @alias module:Blog.doFetchBlogTagPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogTagPosts')({ page: 1, lang: 'fr', tagSlug: 'philarmonie-paris' });
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Number}  [obj.page]     Page number
 * @param {String}  [obj.lang]     Language info
 * @param {String}  [obj.tagSlug]  Tag slug wanted
 *
 * @returns {Promise}
 */
const doFetchBlogTagPosts = ({ page, lang, tagSlug }) =>
  dispatch =>
    fetch(
      `${ApiFetch.getBlogURL()}/posts?page=${page}&lang=${lang}&filter[tag]=${tagSlug}`
    ).then(response => response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_POSTS_WITH_TAG,
          payload: {
            page,
            lang,
            tagSlug,
            posts: json || []
          }
        })));

export default doFetchBlogTagPosts;
