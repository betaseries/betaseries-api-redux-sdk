import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

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
    fetch(`${ApiFetch.getBlogURL()}/users`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_AUTHORS,
          payload: {
            authors: json || []
          }
        })));

export default doFetchBlogAuthors;
