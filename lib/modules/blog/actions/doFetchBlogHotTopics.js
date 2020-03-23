import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress hot topics menu
 *
 * **Dispatch**: `FETCH_WP_HOT_TOPICS`
 *
 * @alias module:Blog.doFetchBlogHotTopics
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogHotTopics')();
 *
 * @returns {Promise}
 */
const doFetchBlogHotTopics = () =>
  dispatch =>
    fetch(`${ApiFetch.getBlogMenuURL()}/menus/sujets-chauds`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_HOT_TOPICS,
          payload: {
            items: json.items || []
          }
        })));

export default doFetchBlogHotTopics;
