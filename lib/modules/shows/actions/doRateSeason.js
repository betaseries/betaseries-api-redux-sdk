import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add note on a season show
 *
 * **Dispatch**: `RATE_SEASON`
 *
 * @alias module:Shows.doRateSeason
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRateSeason')({
 *   showId: 438,
 *   season: 3,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 * @param {Number}  [obj.season]    Season number
 * @param {Number}  [obj.note]      Note (from `1` to `5`)
 *
 * @returns {Promise}
 */
const doRateSeason = ({ showId, season, note, ...props }) =>
  dispatch =>
    ApiFetch.post('seasons/note', {
      id: showId,
      season,
      note,
      ...props
    }).then(response => {
      let seasons = response.seasons || [];

      seasons = seasons.map(s => {
        if (s.number === season) {
          return {
            ...s,
            note
          };
        }

        return s;
      });

      return dispatch({
        type: constants.RATE_SEASON,
        payload: {
          ...props,
          showId,
          season,
          note,
          seasons
        }
      });
    });

export default doRateSeason;
