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
 * @param {Object}  [obj]        Accept the following:
 * @param {String}  [obj.lang]   Language info
 * 
 * @returns {Promise}
 */
const doFetchBlogHotTopics = ({ lang }) =>
  dispatch => {
    let suffix;
    switch (lang) {
      case 'de':
        suffix = 'aktuelle-themen';
        break;
      case 'es':
        suffix = 'temas-actuales';
        break;
      case 'fr':
      default:
        suffix = 'sujets-chauds';
    }

    return fetch(
      `${ApiFetch.getBlogMenuURL()}/menus/${suffix}`
    ).then(response => response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_HOT_TOPICS,
          payload: {
            lang,
            items: json.items || []
          }
        })));
  };

export default doFetchBlogHotTopics;
