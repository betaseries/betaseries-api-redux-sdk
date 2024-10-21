import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark entire season as rewatched
 *
 * **Dispatch**: `MARK_SEASON_AS_REWATCHED`
 *
 * @alias module:Shows.doMarkSeasonAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkSeasonAsRewatched')({
 *   showId: 438,
 *   season: 2,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.season]      Number of season to mark as rewatched
 *
 * @returns {Promise}
 */
const doMarkSeasonAsRewatched = (
  {
    showId,
    season
  }
) =>
  dispatch =>
    ApiFetch.post('seasons/rewatch', {
      id: showId,
      season
    }).then(response =>
      dispatch({
        type: constants.MARK_SEASON_AS_REWATCHED,
        payload: {
          showId,
          season,
          seasons: response.seasons || []
        }
      }));

export default doMarkSeasonAsRewatched;
