import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Mark season as hidden
 *
 * **Dispatch**: `MARK_SEASON_AS_HIDDEN`
 *
 * @alias module:Shows.doMarkSeasonAsHidden
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkSeasonAsHidden')({ showId: 123, season: 3 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.season]      Season number to hide
 *
 * @returns {Promise}
 */
const doMarkSeasonAsHidden = ({ showId, season }) =>
  dispatch =>
    ApiFetch.post('seasons/hide', {
      id: showId,
      season
    }).then(response => {
      dispatch({
        type: constants.MARK_SEASON_AS_HIDDEN,
        payload: {
          showId,
          season,
          seasons: response.seasons || []
        }
      });
    });

export default doMarkSeasonAsHidden;
