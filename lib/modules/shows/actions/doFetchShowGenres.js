import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve genres of shows
 *
 * **Dispatch**: `FETCH_SHOW_GENRES`
 *
 * @alias module:Shows.doFetchShowGenres
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowGenres')();
 *
 * @param {Object}  [obj]           Accept the following:
 *
 * @returns {Promise}
 */
const doFetchShowGenres = () =>
  dispatch =>
    ApiFetch.get('shows/genres', {}).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_GENRES,
        payload: {
          genres: response.genres
        }
      }));

export default doFetchShowGenres;
