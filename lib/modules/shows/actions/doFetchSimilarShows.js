import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import doFetchManyShows from './doFetchManyShows';

/**
 * Retrieve similar shows
 *
 * **Dispatch**:
 *
 *  * `FETCH_SIMILAR_SHOWS`
 *  * `FETCH_MANY_SHOWS`
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
const doFetchSimilarShows = ({ showId }) =>
  dispatch =>
    ApiFetch.get('/shows/similars', { id: showId })
      .then(response => {
        const similars = response.similars.slice(0, 5);
        const showIds = similars.map(similar => similar.show_id);

        if (showIds.length === 0) {
          return Promise.resolve({ similars });
        }

        return dispatch(doFetchManyShows({ showIds })).then(() => ({
          similars: showIds
        }));
      })
      .then(response =>
        dispatch({
          type: constants.FETCH_SIMILAR_SHOWS,
          payload: {
            showId,
            similars: response.similars
          }
        }));

export default doFetchSimilarShows;
