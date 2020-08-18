import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unmark season as hidden
 *
 * **Dispatch**: `UNMARK_SEASON_AS_HIDDEN`
 *
 * @alias module:Shows.doUnmarkSeasonAsHidden
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkSeasonAsHidden')({ showId: 123, season: 3 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]    Season ID
 * @param {Number}  [obj.season]      Season number to hide
 *
 * @returns {Promise}
 */
const doUnmarkSeasonAsHidden = ({ showId, season }) =>
  dispatch =>
    ApiFetch.remove('seasons/hide', {
      id: showId,
      season
    }).then(response => {
      dispatch({
        type: constants.UNMARK_SEASON_AS_HIDDEN,
        payload: {
          showId,
          season,
          seasons: response.seasons || []
        }
      });
    });

export default doUnmarkSeasonAsHidden;
