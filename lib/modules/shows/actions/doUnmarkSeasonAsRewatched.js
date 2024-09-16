import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unmark entire season as rewatched
 *
 * **Dispatch**: `UNMARK_SEASON_AS_REWATCHED`
 *
 * @alias module:Shows.doUnmarkSeasonAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkSeasonAsRewatched')({
 *   showId: 438,
 *   season: 2,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.season]      Number of season to unmark as rewatched
 * @param {Number}  [obj.all]         All=1 means unmark all rewatched for that season
 *
 * @returns {Promise}
 */
const doUnmarkSeasonAsRewatched = (
  {
    showId,
    season,
    ...props
  }
) =>
  dispatch =>
    ApiFetch.remove('seasons/rewatch', {
      id: showId,
      season,
      ...props
    }).then(response =>
      dispatch({
        type: constants.UNMARK_SEASON_AS_REWATCHED,
        payload: {
          showId,
          season,
          ...props,
          seasons: response.seasons || []
        }
      }));

export default doUnmarkSeasonAsRewatched;
