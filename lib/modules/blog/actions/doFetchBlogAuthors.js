import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Retrieve wordpress authors
 *
 * **Dispatch**: `FETCH_WP_AUTHORS`
 *
 * @alias module:Blog.doFetchBlogAuthors
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogAuthors')();
 *
 * @returns {Promise}
 */
const doFetchBlogAuthors = () =>
  dispatch =>
    fetch(`${ApiFetch.getBlogURL()}/users?per_page=50`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_AUTHORS,
          payload: {
            authors: json || []
          }
        })));

export default doFetchBlogAuthors;
