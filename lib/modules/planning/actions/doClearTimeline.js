import constants from '../constants';

/**
 * Clear planning timeline feed
 *
 * **Dispatch**: `CLEAR_PLANNING_TIMELINE`
 *
 * @alias module:Planning.doClearTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('planning', 'doClearTimeline')();
 *
 * @returns {Promise}
 */
const doClearTimeline = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_PLANNING_TIMELINE
    });

export default doClearTimeline;
