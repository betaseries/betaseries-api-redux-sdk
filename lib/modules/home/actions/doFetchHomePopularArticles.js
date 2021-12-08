import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve popular articles for the last 30 days
 *
 * **Dispatch**: `FETCH_HOME_POPULAR_ARTICLES`
 *
 * @alias module:Home.doFetchHomePopularArticles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomePopularArticles')({ limit: 10 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.limit]       Results limit per page
 *
 * @returns {Promise}
 */
const doFetchHomePopularArticles = ({ limit = 10, ...props }) =>
  dispatch =>
    ApiFetch.get('home/popular_articles', { limit, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_POPULAR_ARTICLES,
        payload: {
          limit,
          ...props,
          articles: response.articles
        }
      }));

export default doFetchHomePopularArticles;
