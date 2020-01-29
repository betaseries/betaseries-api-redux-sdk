import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve articles of the show
 *
 * **Dispatch**: `FETCH_SHOW_ARTICLES`
 *
 * @alias module:Shows.doFetchShowArticles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowArticles')({ showId: 1275 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
const doFetchShowArticles = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('shows/articles', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_ARTICLES,
        payload: {
          showId,
          ...props,
          articles: response.articles || []
        }
      }));

export default doFetchShowArticles;
