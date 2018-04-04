import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve similar shows
 *
 * **Dispatch**:
 *
 *  * `FETCH_SIMILAR_SHOWS`
  *
 * @alias module:Shows.doFetchSimilarShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchSimilarShows')({ showId: 1275 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.showId]  Show ID
 *
 * @returns {Promise}
 */
const doFetchSimilarShows = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('/shows/similars', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SIMILAR_SHOWS,
        payload: {
          showId,
          ...props,
          similars: response.similars || []
        }
      }));

export default doFetchSimilarShows;
