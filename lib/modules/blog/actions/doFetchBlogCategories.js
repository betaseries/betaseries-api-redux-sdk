import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress categories
 *
 * **Dispatch**: `FETCH_WP_CATEGORIES`
 *
 * @alias module:Blog.doFetchBlogCategories
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogCategories')();
 *
 * @returns {Promise}
 */
const doFetchBlogCategories = () =>
  dispatch =>
    fetch(`${ApiFetch.getBlogURL()}/categories`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_CATEGORIES,
          payload: {
            categories: json || []
          }
        })));

export default doFetchBlogCategories;
