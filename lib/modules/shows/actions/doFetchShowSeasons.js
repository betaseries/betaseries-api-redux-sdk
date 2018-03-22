import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve seasons details list
 *
 * **Dispatch**: `FETCH_SEASONS`
 *
 * @alias module:Shows.doFetchShowSeasons
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowSeasons')({ showId: 12 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
const doFetchShowSeasons = ({ showId }) =>
  dispatch =>
    ApiFetch.get('shows/seasons', { id: showId }).then(response =>
      dispatch({
        type: constants.FETCH_SEASONS,
        payload: {
          showId,
          seasons: response.seasons || []
        }
      }));

export default doFetchShowSeasons;
