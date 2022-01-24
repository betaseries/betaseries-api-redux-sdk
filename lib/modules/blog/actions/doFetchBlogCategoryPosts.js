import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress posts by category
 *
 * **Dispatch**: `FETCH_WP_POSTS_WITH_CATEGORY`
 *
 * @alias module:Blog.doFetchBlogCategoryPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogCategoryPosts')({ page: 1, lang: 'fr', categoryId: 53 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.page]        Page number
 * @param {String}  [obj.lang]        Language info
 * @param {String}  [obj.categoryId]  Category id wanted
 * @param {Array}   [obj.excludedIds] Array of excluded posts ids
 * @param {Number}  [obj.limit]       Results limit per page
 *
 * @returns {Promise}
 */
const doFetchBlogCategoryPosts = (
  { page, lang, categoryId, excludedIds = [], limit = 10 }
) =>
  dispatch => {
    let suffix = '';
    if (excludedIds.length > 0) {
      suffix = `&exclude=${excludedIds.join(',')}`;
    }

    return fetch(
      `${ApiFetch.getBlogURL()}/posts?page=${page}&lang=${lang}&categories=${categoryId}&per_page=${limit}${suffix}`
    ).then(response => response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_POSTS_WITH_CATEGORY,
          payload: {
            page,
            lang,
            limit,
            categoryId,
            excludedIds,
            posts: json || []
          }
        })));
  };

export default doFetchBlogCategoryPosts;
