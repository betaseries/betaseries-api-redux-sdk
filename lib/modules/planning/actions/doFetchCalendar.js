import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve show
 *
 * **Dispatch**: `FETCH_PLANNING_CALENDAR`
 *
 * @alias module:Planning.doFetchCalendar
 * @category actions
 *
 * @example
 * BetaSeries.getAction('planning', 'doFetchCalendar')({
 *   start: '2017-07-01',
 *   end: '2017-07-31',
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.start]     The start date of the calendar (format `Y-m-d`)
 * @param {String}  [obj.end]       The end date of the calendar (format `Y-m-d`)
 *
 * @returns {Promise}
 */
const doFetchCalendar = props =>
  dispatch =>
    ApiFetch.get('planning/calendar', props).then(response =>
      dispatch({
        type: constants.FETCH_PLANNING_CALENDAR,
        payload: {
          days: response.days
        }
      }));

export default doFetchCalendar;
