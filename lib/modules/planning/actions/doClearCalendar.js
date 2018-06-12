import constants from '../constants';

/**
 * Clear planning calendar
 *
 * **Dispatch**: `CLEAR_PLANNING_CALENDAR`
 *
 * @alias module:Planning.doClearCalendar
 * @category actions
 *
 * @example
 * BetaSeries.getAction('planning', 'doClearCalendar')();
 *
 * @returns {Promise}
 */
const doClearCalendar = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_PLANNING_CALENDAR
    });

export default doClearCalendar;
